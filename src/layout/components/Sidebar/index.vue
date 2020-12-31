<!--
 * @Author: xujian
 * @Date: 2020-11-17 15:05:53
 * @LastEditors: xujian
 * @LastEditTime: 2020-12-31 17:33:51
 * @Description:
 * @FilePath: \vue-element-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <!-- logo -->
    <logo v-if="showLogo" :collapse="isCollapse" />
    <!-- 菜单栏的滚动区域 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  created() {
    console.log(this.permission_routes)
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    // 默认激活的菜单
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // 如果设置路径，工具条将突出显示您设置的路径
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // 是否显示菜单栏上方的logo
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    // 样式变量
    variables() {
      return variables
    },
    // 菜单是否折叠
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
