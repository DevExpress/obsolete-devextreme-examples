import * as path from 'path';

import css from 'rollup-plugin-css-only';

import alias from 'rollup-plugin-alias';

import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'dist/main.js',
    output: {
        file: 'dist/bundle.js', // output a single application bundle
        format: "iife"
    },
    sourceMap: false,
    plugins: [
        css({ output: 'dist/bundle.css' }),

        alias({
            jszip: path.join(__dirname, './node_modules/jszip/dist/jszip.min.js')
        }),

        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: [
                './node_modules/rxjs/**',
                './node_modules/jszip/**',
                './node_modules/devextreme/**',
                './node_modules/devextreme-angular/**'
            ]
        }),
        uglify()
    ],
    onwarn: function (message) {
        if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten/.test(message)) {
            return;
        }
        console.error(message);
    }
};