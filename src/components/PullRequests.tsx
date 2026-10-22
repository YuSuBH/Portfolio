import { useState, useEffect } from "react";
import Section from "./Section";
import { fetchGitHubPRs, type GitHubPR } from "../services/github";
import {
  GitPullRequest,
  GitMerge,
  ExternalLink,
  Calendar,
  MessageSquare,
  RefreshCw,
  FolderGit2,
  AlertCircle,
} from "lucide-react";

const PullRequests = () => {
  const [prs, setPrs] = useState<GitHubPR[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "merged" | "open">("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadPRs = async (bypassCache = false) => {
    try {
      if (bypassCache) {
        setIsRefreshing(true);
        localStorage.removeItem("github_prs_cache_YuSuBH");
      } else {
        setLoading(true);
      }
      setError(null);
      const data = await fetchGitHubPRs("YuSuBH");
      setPrs(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load GitHub pull requests"
      );
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadPRs();
  }, []);

  const filteredPRs = prs.filter((pr) => {
    if (filter === "merged") return pr.state === "merged";
    if (filter === "open") return pr.state === "open";
    return true;
  });

  const mergedCount = prs.filter((pr) => pr.state === "merged").length;
  const openCount = prs.filter((pr) => pr.state === "open").length;

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Section id="prs" className="border-t border-border">
      <div className="mb-10 flex flex-col gap-5">
        <div>
          <p className="section-kicker">04 / Open source</p>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Open Source Contributions
            </h2>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            Actively contributing to the open-source ecosystem — collaborating on public repositories, shipping features, and solving real-world issues. Synced live from GitHub.
          </p>
        </div>

        {/* Filter controls & Refresh button */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex border-b border-border">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-2 text-xs font-medium transition-colors ${
                filter === "all"
                  ? "border-b border-foreground text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({prs.length})
            </button>
            <button
              onClick={() => setFilter("merged")}
              className={`flex items-center gap-1 px-3 py-2 text-xs font-medium transition-colors ${
                filter === "merged"
                  ? "border-b border-foreground text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GitMerge size={12} />
              Merged ({mergedCount})
            </button>
            <button
              onClick={() => setFilter("open")}
              className={`flex items-center gap-1 px-3 py-2 text-xs font-medium transition-colors ${
                filter === "open"
                  ? "border-b border-foreground text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GitPullRequest size={12} />
              Open ({openCount})
            </button>
          </div>

          <button
            onClick={() => loadPRs(true)}
            disabled={loading || isRefreshing}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Refresh GitHub PRs"
            aria-label="Refresh GitHub PRs"
          >
            <RefreshCw
              size={16}
              className={isRefreshing ? "animate-spin text-foreground" : ""}
            />
          </button>
        </div>
      </div>

      {/* Loading Skeletons */}
      {loading ? (
        <div className="divide-y divide-border border-y border-border">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="space-y-4 border-y border-border py-6 animate-pulse"
            >
              <div className="flex justify-between items-center">
                <div className="h-4 w-36 bg-muted"></div>
                <div className="h-4 w-20 bg-muted"></div>
              </div>
              <div className="h-5 w-3/4 bg-muted"></div>
              <div className="h-4 w-1/2 bg-muted"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="space-y-3 border-y border-border py-8 text-center">
          <AlertCircle className="mx-auto text-muted-foreground" size={28} />
          <p className="font-medium">{error}</p>
          <button
            onClick={() => loadPRs(true)}
            className="border-b border-foreground pb-1 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : filteredPRs.length === 0 ? (
        <div className="border-y border-border py-12 text-center">
          <GitPullRequest size={36} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            No pull requests found matching the current filter.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPRs.map((pr) => (
            <div
              key={pr.id}
              className="group flex flex-col justify-between gap-4 py-6 transition-colors"
            >
              <div>
                {/* Top Row: Repository & Status Badge */}
                <div className="mb-3 flex items-center justify-between gap-3">
                  <a
                    href={pr.repository_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-[70%] items-center gap-1.5 truncate text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FolderGit2 size={14} className="shrink-0 text-gray-400" />
                    <span className="truncate">{pr.repository_name}</span>
                  </a>

                  {pr.state === "merged" ? (
                    <span                     className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
                      <GitMerge size={12} />
                      Merged
                    </span>
                  ) : pr.state === "open" ? (
                    <span                     className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
                      <GitPullRequest size={12} />
                      Open
                    </span>
                  ) : (
                    <span                     className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
                      <GitPullRequest size={12} />
                      Closed
                    </span>
                  )}
                </div>

                {/* PR Title */}
                <h3 className="mb-2 text-base font-medium leading-snug transition-colors group-hover:text-muted-foreground">
                  <a
                    href={pr.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    {pr.title}
                  </a>
                </h3>
              </div>

              {/* Bottom Row: Metadata & GitHub Link */}
              <div className="mt-2 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-mono">
                    <span className="text-gray-400">#</span>
                    {pr.number}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-gray-400" />
                    {formatDate(pr.merged_at || pr.created_at)}
                  </span>
                  {pr.comments > 0 && (
                    <span className="flex items-center gap-1">
                      <MessageSquare size={13} className="text-gray-400" />
                      {pr.comments}
                    </span>
                  )}
                </div>

                <a
                  href={pr.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  View PR <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default PullRequests;
