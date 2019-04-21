module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  },

  pwa: {
    name: 'TestApp',
    themeColor: '#FF000A',
    msTileColor: '#FF000A'
  }
}
