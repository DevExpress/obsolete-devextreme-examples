System.config({
  transpiler: 'ts',
  typescriptOptions: {
    module: "system",
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  meta: {
    'typescript': {
      "exports": "ts"
    }
  },
  paths: {
    'npm:': './node_modules/'
  },
  map: {
    'ts': 'npm:plugin-typescript/lib/plugin.js',
    'typescript': 'npm:typescript/lib/typescript.js',

    'app': './src',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',

    'rxjs': 'npm:rxjs',
    'rxjs/operators': 'npm:rxjs/operators/index.js',
    'typescript': 'npm:typescript/lib/typescript.js',

    // DevExtreme configuration
    'devextreme': 'npm:devextreme',
    'jszip': 'npm:jszip/dist/jszip.min.js',
    'devextreme-angular': 'npm:devextreme-angular',
    'devextreme-cldr-data': 'npm:devextreme-cldr-data',

    // Globalize configuration
    'globalize': 'npm:globalize/dist/globalize',
    'cldr': 'npm:cldrjs/dist/cldr',
    'json': 'npm:systemjs-plugin-json/json.js',
  },

  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      main: 'index.js',
      defaultExtension: 'js'
    },

    // DevExtreme configuration
    'devextreme': {
      defaultExtension: 'js'
    },
    'devextreme/events/utils': {
      main: 'index'
    },
    'devextreme/events': {
      main: 'index'
    },

    // Globalize configuration
    'globalize': {
      main: '../globalize.js',
      defaultExtension: 'js'
    },
    'cldr': {
      main: '../cldr.js',
      defaultExtension: 'js'
    }
  },
  packageConfigPaths: [
    "./node_modules/@angular/*/package.json",
    "./node_modules/rxjs/operators/package.json",
    "./node_modules/devextreme-angular/*/package.json",
    "./node_modules/devextreme-angular/ui/*/package.json"
  ]
});