import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("events")
export class EventDao {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: "timestamp", nullable: false })
  date: string;

  @Column({ nullable: true })
  place: string;
}
