<template>
  <appbar class="fixed"></appbar>
</template>

<script>
  import appbar from './components/appbar.vue';

  export default {
    data(){
      return {
        num:1
      }
    },
    props:['arg1'],
    methods:{
      addNum(){
        this.num ++;
        alert(this.num);
      }
    },
    components:{
      appbar
    }
  }
</script>
<style>
  .fixed{
    position: fixed;
    z-index: 999;
  }
</style>
