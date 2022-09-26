<template>
  <div>
    <div class="page-index">
      <global-title
        :title="title"
        :left="left"
        :rightText="'按钮'"
        :rigthIcon="{ icon: '', size: 16, place: 'left' }"
      />
    </div>
    <button @click="goPage('/index2')">跳转</button>
  </div>
</template>

<script>
import GlobalTitle from '@/components/GlobalTitle'

export default {
  components: {
    GlobalTitle,
  },
  name: 'HomePage',
  data() {
    return {
      title: null,
      left: null,
    }
  },
  created() {},
  mounted() {
    this.title = this.$route.meta.title
    this.left = this.$route.meta.left
  },
  methods: {
    goPage(url, params) {
      this.$router.push({
        path: url,
        params: params,
      })
    },
  },
}
</script>


<style lang="scss" scoped>
// .page-main {
//   width: 100vw;
//   color: white;

//   .page-card {
//     display: flex;
//     flex-wrap: wrap;

//     .card-list {
//       width: 42%;
//       margin: 0px 0px 0px 8px;
//       padding: 10px 10px 10px 10px;

//       .bg-box {
//         width: 100%;
//         // background-image: url('@/assets/images/pic1.png');
//         background-size: 100% 100%;
//         aspect-ratio: 1/1;

//         .top-icons {
//           height: 15%;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           background-color: transparent;

//           img {
//             padding: 10px 10px 10px 10px;
//             background-color: transparent;
//           }
//         }

//         .zd {
//           width: 100%;
//           height: 70%;
//           background-color: transparent;

//           .zd-img-box {
//             float: right;
//             margin-top: 30%;
//             background-color: transparent;

//             img {
//               display: block;
//               background: transparent;
//             }
//           }
//         }

//         .card-title {
//           width: 100%;
//           height: 15%;
//           color: #fff;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: linear-gradient(
//             rgba(0, 0, 0, 0) 0%,
//             rgba(0, 0, 0, 0.85) 100%
//           );
//           border-radius: 0 0 16px 16px;
//         }
//       }

//       .card-bottom {
//         width: 100%;

//         .bottom-title {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;

//           .title-text {
//             color: #fff;
//           }

//           div {
//             padding: 0px 0px 0px 4px;
//           }
//         }

//         .btn-box {
//           width: 100%;

//           .btn {
//             border: none;
//             background-color: red;
//             padding: 2px 2px 2px 2px;
//             border-radius: 4px;
//             float: right;
//             font-size: 14px;
//           }
//         }
//       }
//     }
//   }
// }
</style>