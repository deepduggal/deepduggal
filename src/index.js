import React from 'react'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-snapshot'
import 'rmwc/dist/styles'

render(
    <App />,
    document.getElementById('root')
)
registerServiceWorker()
