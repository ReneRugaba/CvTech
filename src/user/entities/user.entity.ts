import { PhotosEntity } from './../../photos/entities/photo.entity';
import {
  OneToMany,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { AdresseEntity } from './../../adresse/entities/adresse.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(() => PhotosEntity, (photo) => photo.user, {
    cascade: true,
  })
  photos: PhotosEntity;

  @ManyToOne(() => AdresseEntity, (adresse) => adresse.users)
  @JoinColumn()
  adresse: AdresseEntity;
}
