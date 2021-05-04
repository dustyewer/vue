<template>
    <div>
    <h2>User</h2>
    <h4>{{userId}}</h4>
      <h5>{{$route.params.userId}}</h5>
    </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId () {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
