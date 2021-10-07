import 'core-js/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import WebFont from 'webfontloader'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

WebFont.load({
  active: () => (sessionStorage.fontsLoaded = true),
  google: {
    families: ['Roboto:300,400,500,700&display=swap']
  }
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()
