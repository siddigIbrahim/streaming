module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/streaming/' : '/',
  
  transpileDependencies: [
    'vuetify'
  ],
  
}
