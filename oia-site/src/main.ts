import './styles/tokens.css'
import './styles/layout.css'
import './styles/components.css'

import model from './data/oia-model.json'
import type { OIAModel } from './data/types'
import { initRouter } from './router'

const app = document.getElementById('app')!
initRouter(model as OIAModel, app)
