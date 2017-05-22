# Ng2v Components - [Angular](http://angular.io/) directives specific to [Bootstrap 4](http://v4-alpha.getbootstrap.com/)

[![npm version](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap.svg)](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap)
[![Build Status](https://travis-ci.org/ng2v/ng2v-components.svg?branch=master)](https://travis-ci.org/ng2v/ng2v-components)
[![devDependency Status](https://david-dm.org/ng2v/ng2v-components/dev-status.svg?branch=master)](https://david-dm.org/ng2v/ng2v-components#info=devDependencies)

Welcome to the Angular version of the [Angular UI Bootstrap](https://github.com/angular-ui/bootstrap) library.
This library is being built from scratch by the [ui-bootstrap team](https://github.com/angular-ui/bootstrap).
We are using TypeScript and targeting the Bootstrap 4 CSS framework.

As with Bootstrap 4, this library is a work in progress. Please check out our list of
[issues](https://github.com/ng2v/ng2v-components/issues) to see all the things we are implementing.
Feel free to make comments there.

## Demo

View all the directives in action at https://ng-bootstrap.github.io

## Dependencies
* [Angular](https://angular.io) (tested with 4.0.3)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com) (tested with 4.0.0-alpha.6)

## Installation
After installing the above dependencies, install `ng-bootstrap` via:
```shell
npm install --save @ng2v/ng2v-components
```
Once installed you need to import our main module:
```js
import {Ng2vModule} from '@ng2v/ng2v-components';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice `Ng2vModule.forRoot()`):
```js
import {Ng2vModule} from '@ng2v/ng2v-components';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [Ng2vModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import `Ng2vModule`:

```js
import {Ng2vModule} from '@ng2v/ng2v-components';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [Ng2vModule, ...], 
})
export class OtherModule {
}
```

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ng2v-components`:
```js
map: {
  '@ng2v/ng2v-components': 'node_modules/@ng2v/ng2v-components/bundles/ng2v-components.js',
}
```

