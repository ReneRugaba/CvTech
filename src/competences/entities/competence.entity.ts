import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { CvEntity } from './../../cv/entities/cv.entity';

@Entity()
export class CompetencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
}
