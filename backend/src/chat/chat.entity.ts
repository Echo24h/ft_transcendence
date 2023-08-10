import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner_id: number;

    @Column()
    messages_id: number;

    @Column()
    users_id: number;
}