<template>
  <div>
    <table>
      <tr>
        <td>name</td>
        <td>pass</td>
        <td>sex</td>
      </tr>
      <tr v-for="(item, index) in users" :key="index">
        <td>{{ item.userName }}</td>
        <td>{{ item.passWord }}</td>
        <td>{{ item.userSex }}</td>
      </tr>
    </table>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'hello',
      users: [
        {
        }
      ]
    }
  },
  created () {
    this.query()
  },
  methods: {
    query: function () {
      const _this = this
      this.axios.get('http://localhost:8080/user').then((resp) => {
        debugger
        _this.users = resp.data
      })
    }
  }
}
</script>

<style scoped>
</style>
