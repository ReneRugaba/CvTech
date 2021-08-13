import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { CvEntity } from './../../cv/entities/cv.entity';

@Entity('formations')
export class FormationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomDiplome: string;

  @Column({ type: 'datetime' })
  dateObtention: string;

  @ManyToMany(() => CvEntity, (cv) => cv)
  cv: CvEntity[];
}
