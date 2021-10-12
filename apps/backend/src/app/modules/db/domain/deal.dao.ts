import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("deals")
export class DealDao {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ type: "timestamp", nullable: false })
  date: string;

  @Column({ nullable: false, default: false })
  finished: boolean;

  @Column({ nullable: false, default: false })
  important: boolean;

  @Column({ nullable: false, default: false })
  urgent: boolean;
}
