<template>
    <div class="book-wrap">
        <h3>BOOK</h3>
        <router-link :to="{name:'tools'}">tools</router-link>
        <router-link :to="{name:'edu'}">edu</router-link>
        <router-link :to="{name:'internet'}">internet</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default{

    }
</script>