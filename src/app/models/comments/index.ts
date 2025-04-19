export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: Date;
}

export interface CreateCommentRequest {
  postId: number;
  content: string;
}
