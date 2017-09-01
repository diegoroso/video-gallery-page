# Página da galeria de vídeo

## Instalar o projeto
```sh
$ npm install
```

## Criar config.local
 - Na pasta ~./config, copie o arquivo config.example.js e renomei para config.local.js
 - Crie uma credencial (Chave de API) a partir desse link:
https://console.developers.google.com/apis/credentials
 - Documentação para criação da credencial:
https://developers.google.com/youtube/registering_an_application?hl=pt-br
- Preencha o API_KEY com sua credencial criada

## Inicializar projeto local
```sh
$ npm start
```
Acesse a url onde o projeto foi iniciado (Aparecerá logo após o comando).

Ex.: http://localhost:8080/
```
Project is running at http://localhost:8080/
webpack output is served from /
404s will fallback to /index.html
Hash: 11f474758b9668d8b99d
Version: webpack 3.5.5
```

#

`Obs.: Caso de erro na request (ou os vídeos não apareçam):`
```
{
 "error": {
  "errors": [
   {
    "domain": "usageLimits",
    "reason": "keyExpired",
    "message": "Bad Request"
   }
  ],
  "code": 400,
  "message": "Bad Request"
 }
}
```
Espere alguns instantes e atualize a página.

Esse erro acontece por que demora um pouco para validarem a criação da credencial.
