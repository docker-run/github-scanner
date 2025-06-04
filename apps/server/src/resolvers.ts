import { Resolvers, Visibility } from "./types";
import { filesize } from "filesize";

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
      return filesize(size * 1024, { standard: "jedec" })
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

