import hasRole from './hasRole'
import hasPermi from './hasPermin'
import dialogDrag from './dialogDrag'

const install = function(Vue) {
  Vue.directive('hasRole', hasRole)
  Vue.directive('hasPermi', hasPermi)
  Vue.directive('dialogDrag', dialogDrag)
  
}

if (window.Vue) {
  window['hasRole'] = hasRole
  window['hasPermi'] = hasPermi
  window['dialogDrag'] = dialogDrag
  Vue.use(install); // eslint-disable-line
}

export default install
