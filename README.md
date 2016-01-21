# cordova-ng-boilerplate
Configurar um aplicativo com angularjs e phonegap do zero é MUITO chato, use esse projeto para startar seu app.

## Dependências incluidas

- angular
- angular-route
- angular-touch
- ngCordova
- normalize-css

Para facilitar a instalação, decidimos usar o Bower, para configurar no seu computador, acesse: http://bower.io

Depois de instalado, basta entrar no diretório www, e rodar:
> bower install

## Se quiser utilizar o Phonegap Build
- Mova o arquivo config.xml para dentro de www (isso vai ajudar não inchar o tamanho do seu app)
- Se atente ao caminho do splashscreen e icone depois que você mover o arquivo config.xml
> phonegap remote build android

## Fique atento
- Retire os arquivos .gitignore de dentro de /app/directives e /app/services caso você crie arquivos nesses diretórios. Esse .gitignore foi adicionado para termos a pasta vazia.
- Usando o bower, fique atendo se não existe diretórios com o nome demo, estes diretórios atrapalham a compilação por teram um index.html, sugiro jogar fora :)

## Interface
Se você não quer criar uma, ou não tem uma framework UI em mente, essa aqui http://goratchet.com/ pode lhe ser útil.

## Icones e splashscreen
Você pode utilizar esse site http://pgicons.abiro.com/ para gerar seus icones e splashscreen de maneira rápida.
