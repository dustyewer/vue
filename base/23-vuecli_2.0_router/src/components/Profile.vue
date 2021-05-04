<template>
    <div>
      <h2>Profile</h2>
      <h4>{{$route.query.name}}</h4>
      <h5>{{$route.params.name}}</h5>
    </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style scoped>

</style>
