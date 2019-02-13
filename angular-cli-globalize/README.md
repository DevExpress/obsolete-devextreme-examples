# DevExtreme with Angular and Globalize example

This project demonstrates how to use DevExtreme Globalize integration in an Angular application created via Angular CLI. This demo shows the DataGrid widget localized to `de` locale.

DevExtreme Angular components [were added to a project](https://github.com/DevExpress/devextreme-angular#adding-devexteme-to-an-existing-angular-application) generated using [Angular CLI](https://github.com/angular/angular-cli) (version 7.3.1). Then, the Globalize, CLDR and JSZip (required for DataGrid) packages [were registered in the `tsconfig.json` file](https://github.com/DevExpress/devextreme-angular/blob/master/docs/setup-3rd-party-dependencies.md).

Note that starting from TypeScript 2.9, you don't need to provide ambient declarations for JSON files. Just enable the `compilerOptions.resolveJsonModule` and `compilerOptions.esModuleInterop` options in the `tsconfig.json` file.

To make it easier to load culture-dependent CLDR data, this demo uses the [devextreme-cldr-data](https://www.npmjs.com/package/devextreme-cldr-data) package specially optimized for DevExtreme widgets.

For more information on localization in DevExtreme, refer to the [Common Concepts -> Localization](https://js.devexpress.com/Documentation/Guide/Common/Localization/) topic.

## Getting Started

1. Clone the repository
 ``` text
 git clone https://github.com/devexpress/devextreme-examples.git
 ```

2. Go to the project folder
 ``` text
 cd devextreme-examples/angular-cli-globalize
 ```

3. Install the required NPM packages.
 ``` text
 npm install
 ```
 or
 ``` text
 yarn install
 ```
4. Run the example
 ``` text
npm run serve
 ```
 or
 ``` text
yarn run serve
 ```
6. Navigate to [http://localhost:4200/](http://localhost:4200/).
