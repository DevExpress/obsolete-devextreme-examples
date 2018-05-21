System.config({
  meta: {typescript: {format: 'global'}},
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    'app': './src',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    'tslib': 'npm:tslib/tslib.js',

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
    'jquery': 'npm:jquery/dist/jquery.min.js',
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
    'devextreme-angular': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'devextreme': {
      defaultExtension: 'js'
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
  }
});