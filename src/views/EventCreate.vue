<template>
  <div>
<h1>Create an Event, {{user.name}}</h1>


<!-- <p>This was created by {{user.id}}</p>
<p>There are {{catLength}} categories</p>
<p>{{getEventById(2)}}</p> -->
<!-- <ul><li v-for="cat in categories" :key="cat">
  {{cat}}
  </li></ul> -->
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import DatePicker from 'vuejs-datepicker'
  export default {
    components: {
      DatePicker
    }
    // computed: { 
    // ...mapGetters(['getEventById', 'catLength']),
    // ...mapState(['user', 'categories']
    //   //  userName: state => state.user.name,
    //   //  usrId: state => state.user.id,
    //   //  categories: state => state.categories
    // )
    // }
  }
</script>

<style scoped>

</style>