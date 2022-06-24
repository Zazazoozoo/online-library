<template>
  <header>
    <div class="container">
      <router-link
          :to="{ name: 'main' }"
          class="logo"
      >
        Библиотека
      </router-link>
      <div class="links">
        <router-link
            :to="{ name: 'books' }"
        >
          Книги
        </router-link>
      </div>
      <div class="contacts">
        <router-link
            :to="{ name: 'contacts' }"
        >
          Контакты изданий
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
// import axios from 'axios'

export default {
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  // created() {
  //   this.auth = localStorage.getItem('auth') !== null
  // },
  // methods: {
  //   async fetchUsers() {
  //     try {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //       this.users = response.data;
  //       console.log(response)
  //     } catch (e) {
  //       alert ('Ошибки')
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #0c0c0c;
  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  }
  padding: 20px 0;
  a,
  .contacts {
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
    font-size: 25px;
  }
  .logo {
    color: #EB5804;
    font-size: 30px;
  }
  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
  }
  .contacts {
    display: flex;
    margin-right: 535px;
    //flex-grow: 1;
  }
  button {
    margin-left: auto;
  }
}
</style>

