import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {UsersEntityInterfaces} from "../interfaces/users.interfaces";

@Entity()
export class UsersEntity implements UsersEntityInterfaces {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}