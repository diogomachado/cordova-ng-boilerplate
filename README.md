# cordova-ng-boilerplate
Configurar um aplicativo Cordova com Angularjs do zero pode ser chato, use esse projeto como template para startar seu app.

É simples assim:
>  cordova create novoApp --template=https://github.com/diogomachado/cordova-ng-boilerplate

## Dependências incluidas
Para gerenciar as dependências usamos o Bower (http://bower.io)
> npm install -g bower

O projeto já vem com os pacotes inclusos:

- angular
- angular-route
- ngCordova
- normalize-css

Basta acessar o diretório `www`, e rodar o comando:
> bower install

## Atenção
- Retire os arquivos .gitignore de dentro de /app/directives e /app/services caso você crie arquivos nesses diretórios. Esse .gitignore foi adicionado para termos a pasta vazia.
- Usando o bower, fique atendo se não existe diretórios com o nome demo, estes diretórios atrapalham a compilação por teram um index.html, sugiro jogar fora :)

## Interface
Não utilizamos nenhum framework de interface no template, você pode ficar a vontade para escolher um.

## Icones e splashscreen
Os ícones do app e splashscreen foram gerados pelo site http://pgicons.abiro.com