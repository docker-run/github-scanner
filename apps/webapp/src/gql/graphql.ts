/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FileInfo = {
  __typename?: 'FileInfo';
  exampleYamlFileContent?: Maybe<Scalars['String']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['ID']['output'];
  login: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  repositories: Array<Repository>;
  repository?: Maybe<Repository>;
};


export type QueryRepositoryArgs = {
  name: Scalars['String']['input'];
  owner: Scalars['String']['input'];
};

export type Repository = {
  __typename?: 'Repository';
  fileInfo: FileInfo;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: Owner;
  size: Scalars['String']['output'];
  visibility: Visibility;
  webhooks: Array<Webhook>;
};

export enum Visibility {
  Private = 'Private',
  Public = 'Public'
}

export type Webhook = {
  __typename?: 'Webhook';
  config: WebhookConfig;
  events: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type WebhookConfig = {
  __typename?: 'WebhookConfig';
  contentType: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GetRepositoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepositoriesQuery = { __typename?: 'Query', repositories: Array<{ __typename?: 'Repository', id: string, name: string, size: string, owner: { __typename?: 'Owner', id: string, login: string } }> };

export type GetRepositoryQueryVariables = Exact<{
  owner: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type GetRepositoryQuery = { __typename?: 'Query', repository?: { __typename?: 'Repository', id: string, name: string, size: string, visibility: Visibility, owner: { __typename?: 'Owner', id: string, login: string }, webhooks: Array<{ __typename?: 'Webhook', id: string, url: string, events: Array<string>, config: { __typename?: 'WebhookConfig', contentType: string, url: string } }>, fileInfo: { __typename?: 'FileInfo', exampleYamlFileContent?: string | null, totalCount: number } } | null };


export const GetRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}}]}}]} as unknown as DocumentNode<GetRepositoriesQuery, GetRepositoriesQueryVariables>;
export const GetRepositoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webhooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"fileInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exampleYamlFileContent"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetRepositoryQuery, GetRepositoryQueryVariables>;