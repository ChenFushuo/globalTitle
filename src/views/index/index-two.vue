<template>
  <div>
    <global-title
      :title="title"
      :left="left"
      :leftText="'返回'"
      :rightText="'阿牛'"
      :rigthIcon="{ icon: '', size: 16, place: '' }"
    />
  </div>
</template>

<script>
import GlobalTitle from '@/components/GlobalTitle'

export default {
  components: {
    GlobalTitle,
  },
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.title = this.$route.meta.title
    this.left = this.$route.meta.left
  },
  methods: {},
}
</script>

<style lang='scss' scoped>
</style>
