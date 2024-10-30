export interface ViewApiResponse {
  data?: {
    total: string
  }
}

export interface GithubRepository {
  stargazerCount: number
  description: string
  homepageUrl: string
  languages: {
    color: string
    name: string
  }[]
  name: string
  nameWithOwner: string
  url: string
  forkCount: number
  repositoryTopics: string[]
}

export interface TagsCount {
  [tag: string]: number
}

export interface PaginationType {
  currentPage: number
  totalPages: number
}

export type TOC = {
  value: string
  depth: number
  data: { hProperties?: { id?: string } }
  children: TOC[]
  url: string
}

export interface RemarkTocHeadingOptions {
  exportRef: Array<{ value: string; url: string; depth: number }>
  cleaned?: boolean
}
