import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {UsersEntityInterfaces} from "../interfaces/users.interfaces";

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
  email: string

  @Column({ select: false })
  password: string;

  @Column({ default: "" })
  avatar: string

  @Column({ default: "" })
  country: string

  @Column({ default: "" })
  city: string

  @Column({ default: false , select: false})
  isActive: boolean;
}