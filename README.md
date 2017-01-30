Setting up a Cordova app with Angularjs from scratch can be annoying, use this project as a template to start your app.

It's simple:
>  cordova create <NAME_APP> --template=cordova-ng-boilerplate

## Dependencies front-end
To manage dependencies we use the Bower (http://bower.io)
> npm install -g bower

The project include the packages:

- angular
- angular-route
- ngCordova
- normalize-css

Check your directory `www`, and execute command:
> bower install

## Attention
- Using the bower, be aware if there are no directories with the name __demo__, these directories hamper the compilation by having an index.html, I suggest throwing it out.