import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExperiencesEntity } from './experiences.entity';
import { CompetencesEntity } from './competences.entity';
import { FormationsEntity } from './formations.entity';

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
