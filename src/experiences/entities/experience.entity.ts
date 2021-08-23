import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('experience')
export class ExperiencesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entreprise: string;

  @Column()
  nomPoste: string;

  @Column({ type: 'datetime' })
  dateDebut: string;

  @Column({ type: 'datetime' })
  dateFin: string;
}
