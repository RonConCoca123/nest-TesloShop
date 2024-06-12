import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    title: string;

    @Column('float', {
        default: 0 //Sino se coloca precio, por defecto será 0
    })
    price: number;

    @Column({
        type: 'text',
        nullable: true, //El producto puede aceptar valores nulos en caso no se ponga
    })
    description: string;

    @Column({
        type: 'text',
        unique: true,
    })
    slug:string; //El slug permite identificar el url del producto

    @Column({
        type: 'int',
        default: 0,
    })
    stock:number;

    @Column('text', {
        array: true,  
    })
    sizes: string[]; // Sizes es un arreglo de strings

    @Column('text')
    gender: string;
    //tags
    //images

}
