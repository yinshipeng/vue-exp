<template>
    <div id="home">
      <header-component/>
      <router-view></router-view>
    </div>
</template>
<script>
    import HeaderComponent from '../../components/header.vue'
    export default{
        components:{
            HeaderComponent,
        }
    }
</script>
<style>
</style>
