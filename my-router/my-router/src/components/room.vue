<template>
  <div class="room">
    <div class="has" v-if="$route.params.id">
      <p>房间号:{{$route.params.id}}</p>
      <p>课程名称:{{roomName}}</p>
    </div>
    <div class="no-has" v-else>
        欢迎来到课堂
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomName: ""
    };
  },
  created() {
    // console.log(this)
    if (this.$route.params.id) {
      setTimeout(() => {
        this.roomName = "渡一教育进阶班四期";
      }, 100);
    } 
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  }
};
</script>
