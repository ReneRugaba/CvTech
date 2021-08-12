import { UserEntity } from './../../user/entities/user.entity';
import { OneToMany, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
