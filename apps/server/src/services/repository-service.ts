import pLimit from 'p-limit';
import { GitHubAPI } from '../datasources/github-api';
import { FileInfo } from '../types';

const CONCURRENCY_LIMIT = 2;
const limit = pLimit(CONCURRENCY_LIMIT);
const REPOSITORIES = ["repoA", "repoB", "repoC"]

export class RepositoryService {
  constructor(private api: GitHubAPI) { }

  async getRepositories() {
    const owner = await this.api.getCurrentUser();

    return Promise.all(
      REPOSITORIES.map((name) => limit(() => this.api.getRepository(owner, name)))
    );
  }

  async getYamlContentIfExists(owner: string, name: string, branch: string): Promise<string> {
    const tree = await this.api.getFileTree(owner, name, branch);

    const blobs = tree.filter((item) => item.type === 'blob');
    const yamlFile = blobs.find((item) => item.path.endsWith('.yaml') || item.path.endsWith('.yml'));

    let content = null;

    if (yamlFile) {
      const response = await this.api.getFileContent(owner, name, yamlFile.path)

      if (response.encoding === 'base64') {
        content = Buffer.from(response.content, 'base64').toString('utf-8');
      }
    }

    return content;
  }

  async getFileInfo(owner: string, name: string, branch: string): Promise<FileInfo> {
    const [yaml, tree] = await Promise.all([
      this.getYamlContentIfExists(owner, name, branch),
      this.api.getFileTree(owner, name, branch)
    ]);

    const totalCount = tree.filter((item) => item.type === 'blob').length;

    return {
      totalCount,
      exampleYamlFileContent: yaml
    };
  }
}
