import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ArticlesBlocks, ArticlesInterface, ArticlesTypeKey} from "../interfaces/articles.interface";
import {
  ArticlesBlockType,
  BlocksCodeInterface,
  BlocksImageInterface,
  BlocksTextInterface
} from "../interfaces/blocks.interface";

@Entity()
export class BlocksEntity implements BlocksCodeInterface, BlocksImageInterface, BlocksTextInterface {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  // type: ArticlesBlockType.CODE | ArticlesBlockType.IMAGE | ArticlesBlockType.TEXT;
  type: any;

  @Column({ default: "" })
  code: string;

  @Column({ default: "" })
  src: string;

  @Column({ default: "" })
  title: string;

  @Column({ default: [] })
  paragraphs: string[]

  @CreateDateColumn()
  createdAt: Date;
}