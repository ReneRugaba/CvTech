import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CvEntity } from './cv.entity';

@Entity()
export class FormationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomDiplome: string;

  @Column()
  dateObtention: Date;

  @ManyToMany(() => CvEntity, (cv) => cv)
  cv: CvEntity[];
}
