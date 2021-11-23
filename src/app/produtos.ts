
export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string;
    categoria?: number;
    estoque: number ;
  }
export interface Categoria {
    id: number;
    descricao: string;
    count:number;
  }

export const categorias = [
    {
      id: 0,
      descricao: 'Todas',
      count:5
    },
    {
      id: 1,
      descricao: 'Escritório'
      ,
      count:2
    },
    {
        id: 2,
        descricao: 'Robótica',
      count:2
    },
    {
        id: 3,
        descricao: 'Eletrônicos',
      count:1
    }
  ];
 
export const produtos = [
    {
      id: 1,
      nome: 'Caneta 3d',
      categoria:1,
      preco: 120,
      descricao: 'Uma caneta para desenhar no ar',
      estoque:10
    },
    {
        id: 2,
        nome: 'Kit de Robótica',
        categoria:2,
        preco: 599,
        descricao: 'Kit para construção de robôs',
      estoque:50
    },
    {
        id: 3,
        nome: 'Telefone celular',
        preco: 1200,
        categoria:3,
        descricao: 'Telefone que também faz ligações',
      estoque:40
    },
    {
        id: 4,
        nome: 'Tênis',
        categoria:2,
        preco: 599,
        descricao: 'Kit para construção de robôs',
      estoque:30
    },
    {
        id: 5,
        nome: 'Batata',
        categoria:1,
        preco: 2,
      estoque:20
    }
  ];

