/*
 * @Author: xujian
 * @Date: 2020-11-17 15:05:53
 * @LastEditors: xujian
 * @LastEditTime: 2020-12-28 18:15:34
 * @Description:数据仓库
 * @FilePath: \vue-element-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

// 它将自动从模块文件中导入所有的vuex模块
// console.log(modulesFiles.keys());
// ["./app.js", "./errorLog.js", "./permission.js", "./settings.js", "./tagsView.js", "./user.js"]
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// console.log(modules)
const store = new Vuex.Store({
  modules,
  getters
})

export default store
