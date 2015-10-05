# cordova-ng-boilerplate
Proposta de projeto inicial para começar a desenvolver um aplicatvo híbrido com Cordova e Angularjs rápido, sem precisar ficar configurando muita coisa.

## Instalando dependencias

- angular
- angular-route
- angular-touch
- ngCordova
- normalize-css

Para facilitar a instalação, decidimos usar o Bower, para configurar no seu computador, acesse: http://bower.io

Depois de instalado, basta entrar no diretório www, e rodar:
> bower install

## Se quiser utilizar o Phonegap Build
- Mova o arquivo config.xml para dentro de www (isso vai facilitar para você não enviar diretórios desnecessários)
- Se atente ao caminho do splashscreen e icone depois que você mover o arquivo config.xml
- Altere no arquivo index.html o link cordova.js para phonegap.js

## Fique atento
Retire os arquivos .gitignore de dentro de /app/directives e /app/services caso você crie arquivos nesses diretórios. Esse .gitignore foi adicionado para termos a pasta vazia.

## Interface
Se você não quer criar uma, ou não tem uma framework UI em mente, essa aqui http://goratchet.com/ pode lhe ser útil.

## Icones e splashscreen
Você pode utilizar esse site http://pgicons.abiro.com/ para gerar seus icones e splashscreen de maneira rápida.