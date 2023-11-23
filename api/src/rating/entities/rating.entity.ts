import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from 'typeorm';
import {RatingInterface} from "../interfaces/rating.interface";
import {UsersEntity} from "../../users/entities/users.entity";
import {ArticlesEntity} from "../../articles/entities/articles.entity";

@Entity()
export class RatingEntity implements RatingInterface {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  rate: number;

  @Column({ default: "" })
  text?: string;

  @ManyToOne(() => UsersEntity, (users) => users.rating)
  users?: UsersEntity;

  @ManyToOne(() => ArticlesEntity, (articles) => articles.rating)
  articles?: ArticlesEntity;

  @ManyToOne(() => UsersEntity, (users) => users.ratingProfile)
  profile?: UsersEntity;

  @CreateDateColumn()
  createdAt: Date;
}