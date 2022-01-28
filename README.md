# WAMI (Where Am I) BOT 

![bot](https://i.ibb.co/7STtvmQ/WAMI.png)

### _ChatBot para Whatsapp que permite usuários validarem localização digitando o CEP_
O objetivo deste pequeno projeto é entregar um MVP de um chatbot para você construir seus projetos.
Toda estrutura do projeto está flexível para que a partir dela você possa realizar a criação de menus e suas respectivas interações.
Para gerenciar os estados do chat (menus) utilizo o state pattern e para o envio dos conteúdos faço uso do padrão strategy.

## Features

- Integração com api de CEP 
- Usuários inserem um CEP e validam a localização com informações respeito
- Menus de navegação (internamente utiliza-se o state pattern)
- Strategy pattern para envio dinâmico de conteúdo
- Envio do QR Code para logar no bot por email

## Tech

- [node.js] - javascript runtime
- [TypeScript] - Typed JavaScript at Any Scale
- [Venom-bot](https://www.npmjs.com/package/venom-bot) - High-performance alternative API to whatzapp

## Setup 
- Node >= v16.13.2
- Considere a utilização do yarn
- Navegador Chrome/Chromium instalado

### Rodando o projeto
```console
yarn install
```
> Obs: pode haver falha em alguma lib opcional do projeto, ignore-a e prossiga.

Crie um .env como no exemplo

```console
yarn dev
```

## ToDo
[ ] Implementação de testes

## Demo

[![Watch the video](https://i.ibb.co/vYxn0Sw/image.png)](https://www.youtube.com/watch?v=FWpWV0jm9ew)



 
