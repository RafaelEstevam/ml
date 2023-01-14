# Buscando com Mercado Livre

## Detalhes da aplicação

O projeto consiste na construção de um site de buscas onde o usuário poderá buscar algum produto dentro do Mercado livre, ver o resultado dessa consulta (limitado a 4) e visualizar os detalhes de determinado produto acessado.

## Sobre o desenvolvimento

Para realizar o projeto, foi necessário construir uma integração (REST)com o Mercado Livre.

O backend, feito em NodeJs, atua como proxy, integra a API disponibilizada pelo Mercado Livre e possibilita as consultas feitas através do frontend, construindo as queries de consulta e enviando, para a API do mercado livre, o payload no formato esperado pela API e com a consulta do usuário.

O frontend, por sua vez, realiza todas as suas consultas através das APIs dispoinibilizadas pelo backend.

## Arquitetura

Frontend - Aplicação em React que integra com o Backend para realizar as consultas.

Backend - Servidor em NodeJS que atua como proxy e integra com a API do Mercado LIvre.


## Tecnologias usadas no projeto

- React Js
- Context API
- Styled Components
- Axios
- NodeJs
- Express

## Frontend

O frontend se encontra em /front. 

### Rodando o projeto

- npm install
- npm start

### Variáveis de ambiente

É necessário criar um arquivo de configuração .env para rodar o frontend.

As varíaveis de ambiente são:

*REACT_APP_API*: Endereço do backend que será integrado na aplicação. 

## Backend

O backend se encontra em /back. 
Por padrão, o servidor será iniciado na porta 8081.

### Rodando o projeto

- npm install
- npm start

### APIs

Considerando o ambiente local (http://localhost:8081/api)

### Lista de produtos

Retorna uma lista de produtos de acordo com a consulta do usuário. A lista está limitada a 4 produtos.

```
GET - /items?Q=<consulta_do_usuario>
```

Parâmetros (Query)

- Q = Recebe a consulta do usuário

Retorno (Status - 200)

Lista de produtos emcontrados com base na consulta do usuário.

```
{
    "autor": {
        "autor": "Rafael Estevam",
        "lastname": "Oliveira"
    },
    "items": [
        {
            "item": {
                "id": "MLA1282698203",
                "title": "Apple iPhone 11 (64 Gb) - Negro",
                "price": {
                    "currency": "ARS",
                    "amount": 252300,
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
                "condition": "new",
                "free_shipping": true,
                "sold_quantity": 0
            }
        },
        {
            "item": {
                "id": "MLA913236423",
                "title": "Apple iPhone 11 (128 Gb) - Negro",
                "price": {
                    "currency": "ARS",
                    "amount": 297999,
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg",
                "condition": "new",
                "free_shipping": true,
                "sold_quantity": 50
            }
        },
        {
            "item": {
                "id": "MLA1122696621",
                "title": "Apple iPhone 13 (128 Gb) - Blanco Estelar",
                "price": {
                    "currency": "ARS",
                    "amount": 409000,
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/D_736168-MLA47781742030_102021-I.jpg",
                "condition": "new",
                "free_shipping": true,
                "sold_quantity": 5
            }
        },
        {
            "item": {
                "id": "MLA1274377578",
                "title": "Apple iPhone SE (3ª Generación, 64 Gb) - Product(red)",
                "price": {
                    "currency": "ARS",
                    "amount": 269999,
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/D_816560-MLA52130327574_102022-I.jpg",
                "condition": "new",
                "free_shipping": true,
                "sold_quantity": 0
            }
        }
    ]
}
```


### Produto por ID

Retorna os detalhes de um produto com base no código ML.

```
GET - /items/:ID
```

Parâmetros (Route)

- :id = Código ML que identifica o produto dentro da API do Mercado Livre

Retorno (Status - 200)

Detalhes do produto de acordo com o código ML fornecido.

```
{
    "autor": {
        "autor": "Rafael Estevam",
        "lastname": "Oliveira"
    },
    "item": {
        "id": "MLA1282698203",
        "title": "Apple iPhone 11 (64 Gb) - Negro",
        "price": {
            "currency": "ARS",
            "amount": 252300,
            "decimals": "00"
        },
        "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-O.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 0,
        "description": "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).\n\n\nAvisos Legales\n(1) El iPhone 11 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 2 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla del iPhone 11 tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(4) Los cargadores inalámbricos Qi se venden por separado."
    }
}
```








