import { AuthorInterface } from "./author.interface"

export interface CommentInterface {
  user: AuthorInterface
  commentAbout: string
}
