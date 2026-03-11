import './styles/tokens.css'
import './styles/layout.css'
import './styles/components.css'

import { model } from './data/model'
import { initRouter } from './router'

const app = document.getElementById('app')!
initRouter(model, app)
