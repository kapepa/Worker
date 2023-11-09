import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn} from 'typeorm';
import {NoticeInterface} from "../interfaces/notice.interface";
import {UsersEntity} from "../../users/entities/users.entity";

@Entity()
export class NoticeEntity implements NoticeInterface{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  href: string;

  @Column({default: false})
  read: boolean;

  @ManyToOne(() => UsersEntity, (users) => users.notice)
  users: UsersEntity;

  @CreateDateColumn()
  createdAt: Date;
}