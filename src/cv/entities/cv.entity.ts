import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { ExperiencesEntity } from './../../experiences/entities/experience.entity';
import { CompetencesEntity } from './../../competences/entities/competence.entity';
import { FormationsEntity } from './../../formations/entities/formation.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CvEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cvName: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => ExperiencesEntity, (experience) => experience)
  experiences: ExperiencesEntity[];

  @ManyToMany(() => CompetencesEntity, { cascade: true })
  @JoinTable()
  competences: CompetencesEntity[];

  @ManyToMany(() => FormationsEntity, { cascade: true })
  @JoinTable()
  formation: FormationsEntity[];
}
