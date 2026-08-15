export interface GitHubPR {
  id: number;
  number: number;
  title: string;
  html_url: string;
  state: "merged" | "open" | "closed";
  repository_name: string;
  repository_url: string;
  created_at: string;
  merged_at?: string | null;
  closed_at?: string | null;
  comments: number;
  labels: {
    id: number;
    name: string;
    color: string;
  }[];
  body?: string;
}

const CACHE_KEY_PREFIX = "github_prs_cache_";
const CACHE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

export async function fetchGitHubPRs(
  username: string = "YuSuBH"
): Promise<GitHubPR[]> {
  const cacheKey = `${CACHE_KEY_PREFIX}${username}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    try {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS && Array.isArray(data)) {
        return data;
      }
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  try {
    const response = await fetch(
      `https://api.github.com/search/issues?q=author:${encodeURIComponent(
        username
      )}+type:pr&sort=created&order=desc`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.items || !Array.isArray(result.items)) {
      return [];
    }

    const prs: GitHubPR[] = result.items.map((item: any) => {
      let state: "merged" | "open" | "closed" = "open";
      if (item.pull_request?.merged_at) {
        state = "merged";
      } else if (item.state === "closed") {
        state = "closed";
      }

      let repoName = "";
      if (item.repository_url) {
        repoName = item.repository_url.replace(
          /^https:\/\/api\.github\.com\/repos\//,
          ""
        );
      } else if (item.html_url) {
        const parts = item.html_url.split("/");
        if (parts.length >= 5) {
          repoName = `${parts[3]}/${parts[4]}`;
        }
      }

      return {
        id: item.id,
        number: item.number,
        title: item.title,
        html_url: item.html_url,
        state,
        repository_name: repoName,
        repository_url: `https://github.com/${repoName}`,
        created_at: item.created_at,
        merged_at: item.pull_request?.merged_at || null,
        closed_at: item.closed_at || null,
        comments: item.comments || 0,
        labels: (item.labels || []).map((label: any) => ({
          id: label.id,
          name: label.name,
          color: label.color,
        })),
        body: item.body || "",
      };
    });

    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        timestamp: Date.now(),
        data: prs,
      })
    );

    return prs;
  } catch (error) {
    console.error("Failed to fetch GitHub PRs:", error);
    if (cachedData) {
      try {
        const { data } = JSON.parse(cachedData);
        if (Array.isArray(data)) return data;
      } catch {
        // ignore
      }
    }
    throw error;
  }
}
