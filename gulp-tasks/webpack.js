'use strict';

const assets = require( '../config.js' );
const webpackStream = require( 'webpack-stream' );


module.exports = function ( gulp ) {
    return function () {
        return gulp
            .src( assets.js )
            .pipe( webpackStream( {
                output: {
                    filename: 'app.js'
                },
                externals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    '_': 'lodash'
                },
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015']
                        }
                    }]
                }
            } ) )
            .pipe( gulp.dest( 'public/js' ) );
    };
};
