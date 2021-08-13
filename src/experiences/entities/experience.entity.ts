import { CvEntity } from './../../cv/entities/cv.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('experience')
export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entreprise: string;

  @Column()
  nomPoste: string;

  @ManyToOne(() => CvEntity, (cv) => cv.experiences)
  @JoinColumn()
  cv: CvEntity;

  @Column({ type: 'datetime' })
  dateDebut: string;

  @Column({ type: 'datetime' })
  dateFin: string;
}
