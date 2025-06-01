import type { ApolloError } from '@apollo/client';
import type { ComponentType, ReactNode } from 'react';
import GeneralError from './GeneralError';
import { withErrorBoundary } from './with-error-boundary';

interface QueryResultProps<TData> {
  loading: boolean;
  data?: TData | null;
  error?: ApolloError;
  ContentPlaceholder?: ComponentType;
  render: (data: TData) => ReactNode | null;
}

function QueryResult<TData>({ loading, error, data, render, ContentPlaceholder }: QueryResultProps<TData>) {
  if (error) {
    throw error
  }

  if (!loading && !data) {
    throw new Error('Either loading, error or data has to be set');
  }

  if (loading && !data && ContentPlaceholder) {
    return (
      <ContentPlaceholder />
    );
  }

  return <>{data && render(data)}</>
}

const QueryResultWithErrorBoundary = withErrorBoundary<QueryResultProps<any>>({ ErrorComponent: GeneralError })(QueryResult)

export default QueryResultWithErrorBoundary as unknown as typeof QueryResult;
