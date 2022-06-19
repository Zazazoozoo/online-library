<template>
  <div class="books-page container">
    <h2>Выбери книгу на свой вкус</h2>
    <books-list :books="books"/>
  </div>
</template>

<script>
import BooksList from '@/components/BooksList'
import books from '@/mocks/books'


export default {
  components: {BooksList},
  data() {
    return {
      books,
      searchBook: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 900px;
  height: 500px;
}
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
}
search {
  color: white;
}
</style>
