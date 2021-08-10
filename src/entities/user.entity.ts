import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhotosEntity } from './photos.entity';
import { AdresseEntity } from './adresse.entity';

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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  photos: PhotosEntity;

  @ManyToOne(() => AdresseEntity, (adresse) => adresse.users)
  @JoinColumn()
  adresse: AdresseEntity;
}
