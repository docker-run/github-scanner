import { useParams } from "react-router";
import { QueryResult, PageContent, PageLayout } from "modules/core/components";
import { gql, useQuery } from "@apollo/client";
import RepositoryCard from "./components/RepositoryCard";
import { Divider } from "@mui/material";
import RepositoryContentPlaceholder from "./components/RepositoryContentPlaceholder";
import { formatNumber } from "modules/core/helpers";
import { type GetRepositoryQuery } from "gql/graphql";
import Webhooks from "./components/Webhooks";
import FileContentAccordion from "./components/FileContentAccordion";
import PropertyContainer from "./components/PropertyContainer";

const Placeholder = () => <RepositoryContentPlaceholder withDetails />

const GET_REPOSITORY = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      size
      owner {
        id
        login
      }
      webhooks {
        id
        url
        events
        config {
          contentType
          url
        }
      }
      visibility
      fileInfo {
        exampleYamlFileContent
        totalCount
      }
    }
  }
`

export default function Repository() {
  const { owner, name } = useParams();
  const { loading, error, data } = useQuery<GetRepositoryQuery>(GET_REPOSITORY, {
    variables: { owner, name }
  })

  return (
    <PageLayout>
      <PageContent withBackButton>
        <QueryResult
          ContentPlaceholder={Placeholder}
          error={error}
          loading={loading}
          data={data?.repository}
          render={
            ({
              id,
              name,
              size,
              owner: { login },
              visibility,
              webhooks,
              fileInfo: {
                exampleYamlFileContent,
                totalCount
              }
            }) =>
              <RepositoryCard
                key={id}
                title={name}
                subtitle={size}
                description={login}
              >
                <Divider sx={{ my: 1 }} />
                <PropertyContainer name="Visibility" value={visibility} />
                <PropertyContainer name="Number of files in the repository" value={formatNumber(totalCount)} />
                <Webhooks hooks={webhooks} />
                <FileContentAccordion content={exampleYamlFileContent} />
              </RepositoryCard>
          }
        />
      </PageContent>
    </PageLayout>
  )
}
