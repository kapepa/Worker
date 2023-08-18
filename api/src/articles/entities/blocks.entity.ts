import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {
  ArticlesBlockType,
  BlocksCodeInterface,
  BlocksImageInterface,
  BlocksTextInterface
} from "../interfaces/blocks.interface";
import {ArticlesEntity} from "./articles.entity";
import {UsersEntity} from "../../users/entities/users.entity";

@Entity()
export class BlocksEntity implements BlocksCodeInterface, BlocksImageInterface, BlocksTextInterface {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: ArticlesBlockType;

  @Column({ default: "" })
  code: string;

  @Column({ default: "" })
  src: string;

  @Column({ default: "" })
  title: string;

  @Column({ type: "text", default: [], array: true })
  paragraphs: string[];

  @ManyToOne(() => ArticlesEntity, (articles) => articles.blocks)
  articles: ArticlesEntity;

  @ManyToOne(() => UsersEntity, (users) => users.blocks)
  users: UsersEntity;

  @CreateDateColumn()
  createdAt: Date;
}