## npx create vite@latest

## npm install

## npm i install tailwindcss postcss autoprefix -D
- instalação da biblioteca tailwind como dependência de desenvolvimento

## npx tailwindcss init -p
- criação do arquivo de de configuração do tailwind

## Estensões VSCODE:
- GraphQL
- Tailwind CSS intelisense
- PostCSS Language Support

## npm i @apollo/client graphql
- Apollo para fazer a conexão com a API

## SVG no REACT
- Diferente do HTML, os SVG's tem comportamento diferente no React, um dica é usar um site
chamado: https://svg2jsx.com/ para que possamos fazer a conversão para o padrão adequado.

## fosfore
- Biblioteca de ícones: https://phosphoricons.com/

## Propriedades
- No typescript é sempre importante tipar as propriedades que os components irão receber utilizando a interface.
```
interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
```
- Do mesmo modo precisamos criar uma interface para o tipo de retorno das query ao usar a consulta a API com typescript.

## npm i dayjs | npm i date-fns
- Muito utilizadas para trabalhar com datas no javascript.<br>
Usada na aplicação -> date-fns:<br>
isPast: identifica quando uma data ja passou.<br>
format: formatação de data, precisa passar dois parâmetros

## Vimejs
- Para otimizar o uso de Videos em uma aplicação, esta biblioteca não suporta o React18 por conta de uma parte chamada Stream Server Side Render, mas podemos 
forçar a instalação com:
```
npm i @vime/core @vime/react --force
```

## npm i react-router-dom
- Bilbioteca para lidar com roteamento dentro de um aplicação React

## npm i classnames
- Lib que ajuda gerenciar condicionais no css quando algo esta ativo.