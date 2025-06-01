import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { Webhook } from "../types";
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { RepositoryParent, WebhookParent, FileContent, FileTree, Tree, User } from "./types";

export class GitHubAPI extends RESTDataSource {
  override baseURL = "https://api.github.com/"
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
  }

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['Authorization'] = `Bearer ${this.token}`;
  }

  async getCurrentUser(): Promise<string> {
    const user = await this.get<User>("/user")
    return user.login
  }

  async getRepository(owner: string, name: string): Promise<RepositoryParent> {
    const repository = await this.get<RepositoryParent>(`repos/${owner}/${name}`)

    return {
      id: repository.id,
      private: repository.private,
      name: repository.name,
      owner: repository.owner,
      size: repository.size,
      default_branch: repository.default_branch
    }
  }

  async getWebHooks(owner: string, name: string): Promise<Webhook[]> {
    const webhooks = await this.get<WebhookParent[]>(`repos/${owner}/${name}/hooks`)
    return webhooks.map(hook => ({
      id: hook.id,
      url: hook.url,
      events: hook.events,
      config: { contentType: hook.config.content_type, url: hook.config.url }
    }))
  }

  async getFileTree(owner: string, name: string, defaultBranch: string): Promise<Tree[]> {
    const response = await this.get<FileTree>(`repos/${owner}/${name}/git/trees/${defaultBranch}?recursive=1`)
    return response.tree
  }

  getFileContent(owner: string, name: string, filePath: string): Promise<FileContent> {
    return this.get(`repos/${owner}/${name}/contents/${filePath}`)
  }
}
