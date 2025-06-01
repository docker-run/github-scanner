import prettyBytes from "pretty-bytes";
import { Resolvers, Visibility } from "./types";

export const resolvers: Resolvers = {
  Query: {
    repositories: (_, __, { services }) => {
      return services.repository.getRepositories();
    },
    repository: (_, { owner, name }, { dataSources }) => {
      return dataSources.githubAPI.getRepository(owner, name)
    }
  },

  Repository: {
    size: ({ size }) => {
      return prettyBytes(size * 1024, { space: false })
    },
    visibility: ({ private: isRepositoryPrivate }) => {
      return isRepositoryPrivate ? Visibility.Private : Visibility.Public
    },
    fileInfo: ({ default_branch, owner, name }, _, { services }) => {
      return services.repository.getFileInfo(
        owner.login,
        name,
        default_branch,
      )
    },
    webhooks: ({ owner, name }, _, { dataSources }) => {
      return dataSources.githubAPI.getWebHooks(owner.login, name)
    }
  },
};

