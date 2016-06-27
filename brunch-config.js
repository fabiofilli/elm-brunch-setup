module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.scss'
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },
  paths: {
    watched: ['app']
  },
  plugins: {
    elmBrunch: {
      mainModules: ['app/elm/Main.elm'],
      outputFolder: 'public/js'
    }
  },
}
