<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="left"
    :fixed="fixed"
    @click-left="clickLeft"
    @click-right="clickRight"
  >
    <!--  插槽，自定义右侧按钮  -->
    <template v-if="rightText" #right>
      <van-icon
        v-if="rightIconRst.place === 'left'"
        :name="rightIconRst.icon"
        :size="rightIconRst.size"
      />
      <span>{{ rightText }}</span>
      <van-icon
        v-if="rightIconRst.place === 'right'"
        :name="rightIconRst.icon"
        :size="rightIconRst.size"
      />
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  name: 'GlobalTitle',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
    leftText: {
      type: String,
      default: '',
    },
    rightText: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      rightIconRst: { icon: 'search', size: 18, place: 'left' }, // 图标name，大小，位置
    }
  },
  watch: {
    rightIcon: {
      handler(nv, ov) {
        this.rightIconRst = Object.assign(this.rightIconRst, nv)
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    clickLeft() {
      this.$router.back()
    },
    // 自定义操作
    clickRight() {
      this.$emit('rightEvent')
    },
  },
}
</script>
<style lang="scss" scoped>
</style>