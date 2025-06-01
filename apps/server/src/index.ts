import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";
import { GitHubAPI } from "./datasources/github-api";
import 'dotenv/config';
import { RepositoryService } from "./services/repository-service";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      const githubAPI = new GitHubAPI({ cache, token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN })
      const repository = new RepositoryService(githubAPI)

      return {
        dataSources: {
          githubAPI
        },
        services: {
          repository
        }
      };
    }
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
