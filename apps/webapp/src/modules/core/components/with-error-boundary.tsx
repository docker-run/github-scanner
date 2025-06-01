import { Component, ErrorInfo } from "react";

export interface WithErrorBoundaryProps {
  reactBoundaryError?: Error;
}

interface BaseBoundaryOptions<TProps> {
  getErrMsg?(props: TProps, error: Error): string;
}

interface ExtendedBoundaryOptions<TProps> extends BaseBoundaryOptions<TProps> {
  ErrorComponent: React.ComponentType<WithErrorBoundaryProps>;
}

export type ErrorBoundaryOptions<TProps> =
  | BaseBoundaryOptions<TProps>
  | ExtendedBoundaryOptions<TProps>;

function hasErrorComponent<TProps>(
  options: ErrorBoundaryOptions<TProps>
): options is ExtendedBoundaryOptions<any> {
  return options.hasOwnProperty('ErrorComponent');
}

export function withErrorBoundary<TProps>(
  options?: BaseBoundaryOptions<TProps>
): (C: React.ComponentType<TProps & WithErrorBoundaryProps>) => React.ComponentClass<TProps>;

export function withErrorBoundary<TProps>(
  options?: ExtendedBoundaryOptions<TProps>
): (C: React.ComponentType<TProps>) => React.ComponentClass<TProps>;

export function withErrorBoundary<TProps>(options: ErrorBoundaryOptions<TProps> = {}) {
  return (C: React.ComponentType<TProps & WithErrorBoundaryProps>) => {
    return class WithErrorBoundary extends Component<
      TProps,
      { error?: Error; errorInfo?: ErrorInfo }
    > {
      public componentDidUpdate(prevProps: TProps) {
        if (this.props !== prevProps) {
          this.setState({ error: undefined, errorInfo: undefined });
        }
      }

      public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        const { getErrMsg } = options;

        const enhancedErrorMsg = getErrMsg ? getErrMsg(this.props, error) : error.message;
        error.message = enhancedErrorMsg;
        console.error(enhancedErrorMsg);

        // TODO: Add client error logging here

        this.setState({
          error,
          errorInfo,
        });
      }

      public render() {
        const error = this.state && this.state.error;

        if (hasErrorComponent(options) && error) {
          const { ErrorComponent } = options;
          return <ErrorComponent reactBoundaryError={error} />;
        }
        return <C {...this.props} reactBoundaryError={this.state && this.state.error} />;
      }
    };
  };
}
