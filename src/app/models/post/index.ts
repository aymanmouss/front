export interface Post {
  id: number;
  authorId: number;
  topicId: number;
  title: string;
  content: string;
  createdAt: Date;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  topicId: number;
}
