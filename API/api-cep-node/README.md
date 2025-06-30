# API de Consulta de CEP

Este projeto é uma API simples desenvolvida em Node.js que permite buscar informações de endereço a partir de um CEP.

## Estrutura do Projeto

```
api-cep-node
├── src
│   ├── app.js               # Ponto de entrada da aplicação
│   ├── routes
│   │   └── cep.js           # Rotas relacionadas ao CEP
│   └── controllers
│       └── cepController.js  # Controlador para buscar endereço por CEP
├── package.json              # Configuração do npm
└── README.md                 # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd api-cep-node
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar a API, execute o seguinte comando:
```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Uso

Para buscar informações de endereço a partir de um CEP, faça uma requisição GET para a seguinte rota:
```
GET /cep/:cep
```

Substitua `:cep` pelo CEP desejado. A resposta será um objeto JSON contendo as informações do endereço.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas pull requests.