import ReadMoreComponent from './components/ReadMoreComponent'
import ReadMoreDirective from './directives/ReadMoreDirective.js'

export default {
  install: function (Vue, options) {
    Vue.component('readMore', ReadMoreComponent)
    Vue.directive('readMore', ReadMoreDirective)
  }
}
