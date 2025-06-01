import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../server/src/schema.graphql',
  documents: ['src/**/*.{graphql,tsx,ts}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        useTypeImports: true,
        fragmentMasking: false,
      },
    },
  },
};

export default config;
