import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntityConfig, JoinConfig } from "../structs";
import { Course } from "./course";


const entity: EntityConfig = {
    name: "LESSONS"
};

const join: JoinConfig = {
    name: "courseId"
};

@Entity(entity)
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
    @JoinColumn(join)
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}