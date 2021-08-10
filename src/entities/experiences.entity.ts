import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CvEntity } from './cv.entity';

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
