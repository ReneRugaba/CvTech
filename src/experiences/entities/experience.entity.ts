import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CvEntity } from './../../cv/entities/cv.entity';

@Entity()
export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateDebut: Date;

  @Column()
  detaFin: Date;

  @Column()
  entreprise: string;

  @ManyToOne(() => CvEntity, (cv) => cv.experiences)
  @JoinColumn()
  cv: CvEntity;
}
