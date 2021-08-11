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

@Entity()
export class CvEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cvName: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => ExperiencesEntity, (experience) => experience)
  experiences: ExperiencesEntity[];

  @ManyToMany(() => CompetencesEntity, (competence) => competence.cv, {
    cascade: true,
  })
  @JoinTable({
    name: 'cv_competence',
    joinColumn: { name: 'cvId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'competenceId', referencedColumnName: 'id' },
  })
  competences: CompetencesEntity[];

  @ManyToMany(() => FormationsEntity, (formation) => formation.cv, {
    cascade: true,
  })
  @JoinTable({
    name: 'cv_formation',
    joinColumn: {
      name: 'cvId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'formationId',
      referencedColumnName: 'id',
    },
  })
  formation: FormationsEntity[];
}
