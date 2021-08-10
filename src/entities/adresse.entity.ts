import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class AdresseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numRue: number;

  @Column()
  rue: string;

  @Column()
  complement: string;

  @Column()
  codePostal: number;

  @Column()
  ville: string;

  @OneToMany(() => UserEntity, (user) => user.adresse)
  users: UserEntity[];
}
