import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntityConfig } from "../structs";
import { Lesson } from "./lesson";

const config: EntityConfig = {
    name: "COURSES"
};

@Entity(config)
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    thumbnail: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    sequence: number;

    @OneToMany(() => Lesson, l => l.course)
    lessons: Lesson[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}