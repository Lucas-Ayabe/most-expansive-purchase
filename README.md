# Most expansive purchase

## Instalação

Instale as dependências com:

```shell
yarn
```

Ou se usar npm:

```shell
npm install
```

Depois para testar use o comando:

```shell
yarn dev
```

Ou se usar npm:

```shell
npm run dev
```

## Arquitetura

Na pasta `services` foi criado a instância do Axios já configurada para a API que será utilizada (no arquivo api.ts), e tem um arquivo _purchase.service.ts_ são colocados as tipagens para a API e as funções que farão as requisições para os endpoints (que no caso só existe um).

## Explicando a lógica

No index é feita a requisição usando a função criada no _purchase.service.ts_ que retorna os dados das compras. Ai primeiro convertemos a data da compra para uma data de verdade do JS através da função `adaptingToDate` fazendo uma operação de map.

Depois que mapearmos os objetos para versões com a data sendo uma data de verdade, nós filtramos só os de 2016 com o método filter e a função byYear que é uma high order function (pense em uma função que consegue criar outras funções mais especializadas, no nosso caso ele cria uma função que consegue filtrar baseado no ano que ela receber como parâmetro).

E por fim nós precisamos reduzir ela a compra mais cara, então usamos um reduce + a função mostExpansive (que tem uma comparação simples para saber se o item atual é mais caro que o anterior e se isso for verdade ele é retornado, senão fica o item anterior mesmo) e voila temos a compra mais cara de 2016.
