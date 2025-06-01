import { GitHubAPI } from "./datasources/github-api";
import { RepositoryService } from "./services/repository-service";

export type DataSourceContext = {
  dataSources: {
    githubAPI: GitHubAPI;
  },
  services: {
    repository: RepositoryService
  }
};
