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
    <Section id="prs" className="bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl font-bold tracking-tighter">
              Open Source Contributions
            </h2>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 flex items-center gap-1.5">
              <GitPullRequest size={14} />
              Live Activity
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base">
            Actively contributing to the open-source ecosystem — collaborating on public repositories, shipping features, and solving real-world issues. Synced live from GitHub.
          </p>
        </div>

        {/* Filter controls & Refresh button */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              All ({prs.length})
            </button>
            <button
              onClick={() => setFilter("merged")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 ${
                filter === "merged"
                  ? "bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              <GitMerge size={12} />
              Merged ({mergedCount})
            </button>
            <button
              onClick={() => setFilter("open")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 ${
                filter === "open"
                  ? "bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              <GitPullRequest size={12} />
              Open ({openCount})
            </button>
          </div>

          <button
            onClick={() => loadPRs(true)}
            disabled={loading || isRefreshing}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-gray-600 dark:text-gray-400"
            title="Refresh GitHub PRs"
            aria-label="Refresh GitHub PRs"
          >
            <RefreshCw
              size={16}
              className={isRefreshing ? "animate-spin text-purple-600 dark:text-purple-400" : ""}
            />
          </button>
        </div>
      </div>

      {/* Loading Skeletons */}
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 animate-pulse space-y-4"
            >
              <div className="flex justify-between items-center">
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              </div>
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="p-8 rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 text-center space-y-3">
          <AlertCircle className="mx-auto text-red-500" size={32} />
          <p className="text-red-700 dark:text-red-300 font-medium">{error}</p>
          <button
            onClick={() => loadPRs(true)}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : filteredPRs.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
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
              className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Repository & Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <a
                    href={pr.repository_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors truncate max-w-[70%]"
                  >
                    <FolderGit2 size={14} className="shrink-0 text-gray-400" />
                    <span className="truncate">{pr.repository_name}</span>
                  </a>

                  {pr.state === "merged" ? (
                    <span className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 flex items-center gap-1">
                      <GitMerge size={12} />
                      Merged
                    </span>
                  ) : pr.state === "open" ? (
                    <span className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/60 flex items-center gap-1">
                      <GitPullRequest size={12} />
                      Open
                    </span>
                  ) : (
                    <span className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <GitPullRequest size={12} />
                      Closed
                    </span>
                  )}
                </div>

                {/* PR Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug line-clamp-2">
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
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
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
                  className="inline-flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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
