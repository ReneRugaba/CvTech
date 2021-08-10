import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

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
