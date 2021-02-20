export interface IData {
    nome: string
    email: string
    quantidade: number
    cores: Cores
    pedido: string

}


export enum Cores {
    'Azul', 'Rosa', 'Laranja'
}