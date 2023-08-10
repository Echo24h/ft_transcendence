import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    is_admin: boolean;

    @Column()
    password: string;

    @Column()
    profil_file: string;

}