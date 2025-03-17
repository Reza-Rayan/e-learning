import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson{

    @ObjectIdColumn()
    _id:string;

    @PrimaryColumn("uuid")
    id:string;


    @Column()
    title: string;

    @Column()
    startDate: string;


    @Column()
    endDate:string;
}
