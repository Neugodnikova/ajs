const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа — твой исходный файл
  output: {
    path: path.resolve(__dirname, 'dist'), // выходной каталог
    filename: 'index.js', // имя сборочного файла
    library: 'ajs', // название библиотеки
    libraryTarget: 'umd', // формат: поддерживает и Node.js, и браузер
    libraryExport: 'default', // экспорт по умолчанию
    globalObject: 'this', // глобальный объект — this (работает и в браузере, и в Node.js)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // обрабатываем только JS-файлы
        exclude: /node_modules/, // исключаем зависимости
        use: {
          loader: 'babel-loader', // используем Babel
        },
      },
    ],
  },
};
