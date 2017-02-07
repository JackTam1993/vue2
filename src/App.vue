<template>
  <div class="demo-badge-container">
    <mu-badge :content="num1" class="demo-icon-badge" circle secondary>
      <mu-icon value="notifications"/>
    </mu-badge>
    <mu-badge :content="num2" circle secondary>
      <mu-icon-button icon="notifications" @click="add"/>
    </mu-badge>
    <timepicker></timepicker>
  </div>

</template>
<script>
  import timepicker from 'components/TimePicker.vue';

  export default {
    data () {
      return {
        num1:'2',
        num2:'1'
      }
    },
    props:['content'],
    methods:{
      add:function (val) {
      console.log(val);
      }
    },
    components:{
      timepicker
    }
  }
</script>

<style>
  .demo-badge-container{
    padding-top: 24px;
  }
  .demo-icon-badge {
    padding: 12px;
    margin-right: 16px;
  }
</style>
