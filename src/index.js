import ReadMoreComponent from './ReadMoreComponent.vue'
import ReadMoreDirective from './ReadMoreDirective.js'

export default {
  install: function (Vue, options) {
    Vue.component('readMore', ReadMoreComponent)
    Vue.directive('readMore', ReadMoreDirective)
  }
}
