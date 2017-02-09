<template>
  <div>
  <atable></atable>
  <apagination></apagination>
  </div>
</template>

<script>
  import atable from 'components/table.vue'
  import apagination from 'components/pagination.vue'

  export default {
    data(){
      return {

      }
    },
    components:{
      atable,
      apagination
    }
  }
</script>
