import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany} from 'typeorm';
import {UsersEntityInterfaces} from "../interfaces/users.interfaces";
import {ArticlesEntity} from "../../articles/entities/articles.entity";
import {BlocksEntity} from "../../articles/entities/blocks.entity";
import {CommentsEntity} from "../../comments/entities/comments.entity";
import {Role} from "../enum/role.enum";

@Entity()
export class UsersEntity implements UsersEntityInterfaces {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column({ default: "" })
  firstname: string;

  @Column({ default: "" })
  lastname: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: "" })
  avatar: string;

  @Column({ default: "" })
  country: string;

  @Column({ default: "" })
  city: string;

  @Column({ type: 'enum', enum: Role, array: true, default: [Role.USER] })
  roles?: Role[];

  @OneToMany(type => ArticlesEntity, (articles) => articles.users)
  articles: ArticlesEntity[];

  @OneToMany(() => BlocksEntity, (blocks) => blocks.users)
  blocks: BlocksEntity[];

  @OneToMany(() => CommentsEntity, (comments) => comments.users)
  comments: CommentsEntity[]

  @Column({ default: false , select: false})
  isActive: boolean;
}