//Para obtener direcciones de manera automatica
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Configuración total de WEBPACK
module.exports = {

    //CONFIGURACIÖN GENERAL DEL PROYECTO
    //Esta es la configuración en modo production
    mode: 'production',
    //Punto de entrada de archivos js
    entry: './src/index.js',
    //Configuración de los archivos de salida
    output:{
        //Definimos la dirección del punto de salida
        //Usaremos el directorio por defecto dist
        path: path.resolve(__dirname, 'dist'),
        //Establezco el nombre de file para la salida
        filename: 'main.js'
    },
    //Definimos las extensiones de los archivos de salida
    //Que se leeran el mas común js
    resolve: {
        extensions:['js']
    },

    //CONFIGURACION LOADERS
    module: {
        //BABEL
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
            }
        ]
    },

    //CONFIGURACIÓN DE PLUGINS
    plugins: [
        //HTML
        new HtmlWebpackPlugin({
            //Permitir el ingreso automatico de html
            inject: true,
            //Establece la ruta del archivo inicial
            template: './public/index.html',
            //Establece el nombre de archivo de salida
            filename: './index.html'
        }),
    ],
}



