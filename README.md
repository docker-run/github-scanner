# GitHub Scanner

A **full-stack GitHub repository explorer** built with **TurboRepo**.

## Contents

* [Package overview](#package-overview)
* [Prerequisites](#prerequisites)
* [Running the Application](#running-the-application)

## Package overview

| Package        | Purpose                                     | Tech stack                               |
| -------------- | ------------------------------------------- | ---------------------------------------- |
| `apps/server`  | GraphQL API that talks to the GitHub REST API | Node 18 +, TypeScript, Apollo Server     |
| `apps/webapp`  | React UI that consumes the API               | Vite, React 19, Material UI, Apollo Client |

## Prerequisites

- **Node ≥ 18**
- **npm ≥ 10**
- A **GitHub account** with existing `repoA`, `repoB`, `repoC` repositories
- A **GitHub Personal Access Token** that can be used to access the [GitHub API](https://docs.github.com/en)

## Running the Application

### 1. Add your token

To create a **GitHub Personal Access Token**, go to [GitHub Developer Settings](https://github.com/settings/tokens) page, and select "Generate new token (for general use)"

Then select `repo` and `admin:repo_hook` scopes

Next, from the root of the repo:
```shell
echo "GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here" > apps/server/.env
```

### 2. Install dependencies

From the root of the repo:

```shell
npm install
```

### 3. Start local development

From the root of the repo:

```shell
npm run dev

```
### 4. Access

Webapp: http://localhost:5173/

Apollo Server: http://localhost:4000/
