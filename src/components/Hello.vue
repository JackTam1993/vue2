<template>
  <div>
    <mu-float-button icon="add" class="demo-float-button"/>
    <mu-float-button icon="add" mini class="demo-float-button"/>
    <mu-float-button icon="add" secondary class="demo-float-button"/>
    <mu-float-button icon="add" secondary mini class="demo-float-button"/>
    <mu-float-button icon="star" disabled class="demo-float-button"/>
    <mu-float-button icon="star" disabled mini class="demo-float-button"/>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
