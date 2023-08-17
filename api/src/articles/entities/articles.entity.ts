import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';
import {ArticlesBlocks, ArticlesInterface, ArticlesTypeKey} from "../interfaces/articles.interface";

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

  @Column({ default: "" })
  views: number;

  @Column({ default: ArticlesTypeKey.IT })
  type: ArticlesTypeKey[]

  @Column({ default: {} })
  blocks: ArticlesBlocks;

  @CreateDateColumn()
  createdAt: Date;
}