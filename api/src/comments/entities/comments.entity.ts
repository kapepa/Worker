import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../../users/entities/users.entity";
import {CommentsInterfaces} from "../interfaces/comments.interfaces";
import {ArticlesEntity} from "../../articles/entities/articles.entity";

@Entity()
export class CommentsEntity implements CommentsInterfaces {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "" })
  text: string;

  @ManyToOne(() => ArticlesEntity, (articles) => articles.comments)
  articles: ArticlesEntity;

  @ManyToOne(() => UsersEntity, (users) => users.comments)
  users: UsersEntity;

  @CreateDateColumn()
  createdAt: Date;
}