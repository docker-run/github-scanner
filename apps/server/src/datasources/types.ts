export type RepositoryParent = {
  id: string;
  default_branch: string;
  name: string;
  owner: { id: string; login: string; };
  private: boolean;
  size: number;
}

export type Tree = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

export type FileTree = {
  sha: string;
  url: string;
  tree: Tree[]
}

export type User = {
  login: string
}

export type FileContent = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: { self: string; git: string; html: string }
}

export type WebhookParent = {
  id: string;
  url: string;
  events: string[];
  config: { content_type: string; url: string }
}
