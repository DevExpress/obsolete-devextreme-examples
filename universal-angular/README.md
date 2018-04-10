# Universal-Angular

This sample project demonstrates the use of DevExtreme Angular components in an Angular Universal application with server-side rendering.

DevExtreme Angular components [were added to a project](https://github.com/DevExpress/devextreme-angular#adding-devexteme-to-an-existing-angular-application) generated using [Angular CLI](https://github.com/angular/angular-cli). Then, the project was converted to [Angular Universal](https://angular.io/guide/universal).

## Getting Started

1. Clone the repository
 ``` text
 git clone https://github.com/devexpress/devextreme-examples.git
 ```

2. Go to the project folder
 ``` text
 cd devextreme-examples/universal-angular
 ```

3. Install the required modules. This command also convert the DevExtreme package to the AMD module format by using the npm postinstall script.
 ``` text
 npm install
 ```
 
4. Build example
 ``` text
npm run build:ssr
 ```

5. Run example
 ``` text
npm run serve:ssr
 ```
