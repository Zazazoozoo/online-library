<template>
  <div class="info-publication">
    <div class="info"
         v-for="value in users"
         :key="value.users"
    >
      <h3>
        OOO "{{value.company.name}}"
      </h3>
      <ul class="list">
        <li>Адрес: {{ value.address.zipcode }}, {{ value.address.city }}, {{ value.address.street }}, {{value.address.suite}}</li>
        <li>Телефон: {{ value.phone }}</li>
        <li>E-mail: {{ value.email }}</li>
        <li>Сайт: {{ value.website }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios'


export default {
  name: 'Contacts',
  data() {
    return {
      users: [],
      errors: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=5')
        .then(response => {
          this.users = response.data
          console.log(response)
        })
        .catch(e => {
          this.errors.push(e)
        })
  }
}
</script>

<style lang="scss" scoped>
.list, h3 {
  color: white;
}
</style>