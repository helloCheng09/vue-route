<template>
  <div id="app">
    <router-link tag="li" to="/home">Home</router-link>
    <router-link to="/book">BOOK</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/room">Room</router-link>
    <router-link :to="{path:'/room/9999'}">roomtoduyi</router-link>
    <router-link :to="{name: 'room', params:{id:666}}">room to DUYI</router-link>
    <router-view name='left' class="left"></router-view>
    <router-view name='default' class="default"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active, .active{
    color: red;
  }
  .router-link-exact-active, .exact {
    color: gold;
  }

</style>
