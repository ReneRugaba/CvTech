import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CompetencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
}
