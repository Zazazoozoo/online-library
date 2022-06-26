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
        <div class="publishing">
          <router-link
            :to="{ name: 'contacts' }"
          >
          Издательства
        </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {

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
  .publishing {
    margin-left: 75px;
  }
  //.contacts {
  //  display: flex;
  //  margin-right: 535px;
  //  //flex-grow: 1;
  //}
  button {
    margin-left: auto;
  }
}
</style>

