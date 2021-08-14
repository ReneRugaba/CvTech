import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './../../user/entities/user.entity';

@Entity()
export class PhotosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  pathFile: string;

  @Column({ type: 'datetime' })
  createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  @JoinColumn()
  user: UserEntity;
}
