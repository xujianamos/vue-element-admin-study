/*
 * @Author: xujian
 * @Date: 2020-11-17 15:05:53
 * @LastEditors: xujian
 * @LastEditTime: 2020-12-31 15:43:36
 * @Description:
 * @FilePath: \vue-element-admin\src\layout\components\Sidebar\FixiOSBug.js
 */
export default {
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  mounted() {
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = e => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
