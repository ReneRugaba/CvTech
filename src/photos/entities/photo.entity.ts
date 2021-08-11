import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './../../user/entities/user.entity';

@Entity('photos')
export class PhotosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameFile: string;

  @Column()
  pathFile: string;

  @Column()
  createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  @JoinColumn()
  user: UserEntity;
}
