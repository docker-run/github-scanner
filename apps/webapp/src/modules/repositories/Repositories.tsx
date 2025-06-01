import { gql, useQuery } from "@apollo/client";
import { QueryResult, PageContent, PageLayout } from "modules/core/components";
import RepositoryCard from "./components/RepositoryCard";
import RepositoriesContentPlaceholder from "./components/RepositoriesContentPlaceholder";
import { type GetRepositoriesQuery } from "gql/graphql";

const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      id
      name
      size
      owner {
        id
        login
      }
    }
  }
`

export default function Repositories() {
  const { loading, error, data } = useQuery<GetRepositoriesQuery>(GET_REPOSITORIES);

  return (
    <PageLayout>
      <PageContent title="GitHub Repository Scanner">
        <QueryResult
          ContentPlaceholder={RepositoriesContentPlaceholder}
          error={error}
          loading={loading}
          data={data?.repositories}
          render={(repositories) =>
            repositories?.map(({ id, name, size, owner: { login } }) =>
              <RepositoryCard
                key={id}
                title={name}
                subtitle={size}
                description={login}
                goTo={`/repository/${login}/${name}`}
              />
            )
          }
        />
      </PageContent>
    </PageLayout>
  )
}
