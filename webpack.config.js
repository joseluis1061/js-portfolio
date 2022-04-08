//Para obtener direcciones de manera automatica
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        filename: 'main.js', 
        //Salida de las imagenes optimizadas
        assetModuleFilename: 'assets/images/[hash][ext][query]',
    },
    //Definimos las extensiones de los archivos de salida
    //Que se leeran el mas común js
    resolve: {
        extensions:['js']
    },

    //CONFIGURACION LOADERS
    module: {
        //Relgas generales
        rules: [
            //BABEL
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
            },
            //IMAGENES
            {
                //Extensiones
                test: /\.png/,
                //Salidas optimizadas
                type: 'asset/resource'
            },
            //CSS
            {
                test: /\.css|.styl$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader"
                ],
            },

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
        //CSS
        new MiniCssExtractPlugin(),

        //COPIA DE ARCHIVOS
        new CopyPlugin({
            patterns: [{
                //Defino desde donde y hacia donde
                from: path.resolve(__dirname,"src", "assets/images"),
                to: "assets/images"
            },
            //   { from: "other", to: "public" },
            ],
        }),
],
}



