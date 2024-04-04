import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export default class Contato extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    endereco!: string;

    @Column()
    telefone!: string;

    @Column()
    email!: string;
}