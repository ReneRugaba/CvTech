import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CvEntity } from './cv.entity';

@Entity()
export class CompetencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @ManyToMany(() => CvEntity, (cv) => cv.competences)
  cv: CvEntity[];
}
