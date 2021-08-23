import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
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

  @ManyToMany(() => ExperiencesEntity, { cascade: true, eager: true })
  @JoinTable()
  experiences: ExperiencesEntity[];

  @ManyToMany(() => CompetencesEntity, { cascade: true, eager: true })
  @JoinTable()
  competences: CompetencesEntity[];

  @ManyToMany(() => FormationsEntity, { cascade: true, eager: true })
  @JoinTable()
  formation: FormationsEntity[];
}
