# Music

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


This app is a demo that simulates a music store.  It was built to demonstrate the awesome sauce that is Angular2!


REST service
------------
The rest service is build using OData so we can use commands as follows to shape the result:

get by id:
http://localhost/music/odata/albums(5)

count:
http://localhost/music/odata/albums/$count

Count with filter:
http://localhost/music/odata/albums/$count?$filter=genre%20eq%20'rock'

page:
http://localhost/music/odata/albums?$skip=25&$top=25

order by:
http://localhost/music/odata/albums?$top=25&$orderby=title

expand:
http://localhost/music/odata/albums?$expand=Artist
http://localhost/music/odata/songs(5)?$expand=Album
http://localhost/music/odata/songs(5)?$expand=Album($expand=Artist)
