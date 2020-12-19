/*
 * @Author: xujian
 * @Date: 2020-11-17 15:05:53
 * @LastEditors: xujian
 * @LastEditTime: 2020-12-18 16:28:46
 * @Description:
 * @FilePath: \vue-element-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  console.log(modules)
  console.log(modulePath)
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
console.log(modules)
const store = new Vuex.Store({
  modules,
  getters
})

export default store
