const {Nuxt, Builder} = require('nuxt');
const app = require('./app');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev   = process.env.NODE_ENV !== 'production'
async function start() {
  try {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)
    const {host, port} = nuxt.options.server
    await nuxt.ready()
    // Build only in dev mode
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }
    // Give nuxt middleware to express
    app.use(nuxt.render)
    // Listen the server
    app.listen(port, host)
  }catch (e) {
    console.log(e)
  }

}
start();
