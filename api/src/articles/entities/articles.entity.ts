import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany} from 'typeorm';
import {ArticlesInterface, ArticlesTypeKey} from "../interfaces/articles.interface";
import {UsersEntity} from "../../users/entities/users.entity";
import {BlocksEntity} from "./blocks.entity";
import {CommentsEntity} from "../../comments/entities/comments.entity";
import {RatingEntity} from "../../rating/entities/rating.entity";

@Entity()
export class ArticlesEntity implements ArticlesInterface {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "" })
  title: string;

  @Column({ default: "" })
  subtitle: string;

  @Column({ default: "" })
  img: string;

  @Column({ default: 0 })
  views: number;

  @Column({ type: 'enum', enum: ArticlesTypeKey, array: true, default: [] })
  type: ArticlesTypeKey[]

  @ManyToOne(() => UsersEntity, (users) => users.articles)
  users: UsersEntity;

  @OneToMany(() => BlocksEntity, (block) => block.articles)
  blocks: BlocksEntity[];

  @OneToMany(() => CommentsEntity, (comments) => comments.articles)
  comments: CommentsEntity[];

  @OneToMany(() => RatingEntity, (rating) => rating.articles)
  rating: RatingEntity[];

  @CreateDateColumn()
  createdAt: Date;
}