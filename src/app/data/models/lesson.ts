import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntityConfig } from "../structs";
import { Course } from "./course";


const config: EntityConfig = {
    name: "LESSONS"
};

@Entity(config)
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    duration: string;

    @Column()
    sequence: number;

    @ManyToOne(() => Course, c => c.lessons)
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}