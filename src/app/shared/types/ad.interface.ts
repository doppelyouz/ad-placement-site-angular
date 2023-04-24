import { CommentInterface } from "./comment.interface";

export interface AdInterface {
  id: string;
  userId: string;
  category: string;
  title: string;
  text: string;
  date: string;
  image: string;
  comments: CommentInterface[]
}
