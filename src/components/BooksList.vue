<template>
  <div class="book-list">
    <div class="search-box">
      <input
          type="search"
          v-model="search"
          class="search-txt"
          placeholder="Найти книгу"
      />
      <img class="search-btn" src="https://cdn.icon-icons.com/icons2/520/PNG/512/Magnifier_icon-icons.com_52024.png">
    </div>
    <br/>
    <book-card
        class="book-card"
        v-for="book in searchHandler"
        :key="book.id"
        :book="book"
    />
  </div>
</template>

<script>
import BookCard from './BookCard'
import books from '@/mocks/books'

//только добавила этот дата-блок и created
export default {
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.data = books
    console.log(this.data)
  },
  computed: {
    searchHandler () {
      return this.data.filter(book => {
        return book.title.toLowerCase().includes(this.search)
      })
    }
  },
  props: {
    books: {
      type: Array,
      default: () => []
    }
  },
  components: { BookCard }
}
</script>

<style lang="scss" scoped>
.book-card {
  margin-bottom: 40px;
}
.search-box {
  top: 50%;
  left: 50%;
  background: #2f3640;
  height: 60px;
  width: 308px;
  border-radius: 40px;
  padding: 10px;
}
.search-btn {
  position: fixed;
  float: right;
  margin-top: -40px;
  //margin-right: 5px;
  width: 35px;
  height: 35px;
}
.search-box:hover > .search-txt
{
  width: 240px;
  padding: 0 6px;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 18px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
}
</style>
