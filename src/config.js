require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '8080',
  apiHost: 'dev.cakeiteasy.no',
  app: {
    title: 'Cake Its easy',
    description: 'Cake Its easy',
    head: {
      titleTemplate: 'Cake Its easy: %s',
      meta: [
        {name: 'description', content: 'Cake Its easy'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Cake Its easy'},
        {property: 'og:image', content: 'https://www.cakeiteasy.no/favicon.ico'},
        {property: 'og:locale', content: 'ru_RU'},
        {property: 'og:title', content: 'Cake Its easy'},
        {property: 'og:description', content: 'Cake Its easy'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@nightfury2'},
        {property: 'og:creator', content: '@nightfury2'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
