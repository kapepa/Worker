import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {UsersEntityInterfaces} from "../interfaces/users.interfaces";
import {Exclude} from "class-transformer";

@Entity()
export class UsersEntity implements UsersEntityInterfaces {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  email: string

  @Column({ select: false })
  password: string;

  @Column({ default: false , select: false})
  isActive: boolean;
}