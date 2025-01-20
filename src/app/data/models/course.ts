import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntityConfig } from "../structs";

const config: EntityConfig = {
    name: "COURSES"
}

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}