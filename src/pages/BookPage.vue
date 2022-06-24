<template>
  <div class="book-page">
    <div class="container" v-if="book">
      <h1>{{ book.title }}</h1>
      <img
          :src="book.img"
          :alt="book.title"
      >
      <div class="section">
        <p class="section__title">Автор:</p>
        <p class="section__description">{{ book.author}}</p>
      </div>
      <div class="section">
        <p class="section__title">Сюжет:</p>
        <p class="section__description">{{ book.description }}</p>
      </div>
      <div class="section">
        <p class="section__title">Рейтинг:</p>
        <p class="section__description">{{ book.rating }}</p>
      </div>
      <div class="line" />

      <div class="review">
        <h3>Моя оценка:</h3>
        <br>
        <ul>
          <li
              v-for="reaction in reactions"
              :key="reaction.id"
          >
            <button type="button" class="btn btn-outline-light">
              {{ reaction.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import books from "@/mocks/books"
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      book: null
    }
  },
  computed: {
    ...mapGetters({
      getReactions: 'reactions/getReactions'
    }),
    reactions() {
      return this.getReactions
    }
  },
  created(){
    const book = books.find(book => book.id == this.$route.params.id)
    if (book) {
      this.book = book
    }
  }
}
</script>

<style lang="scss" scoped>
.book-page {
  padding-bottom: 100px;
  .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    color: #ffffff;
    margin-bottom: 30px;
    padding-bottom: 15px;
    position: relative;
  }
  .line {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
    margin-bottom: 45px;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 900px;
    height: 500px;
    margin-bottom: 30px;
  }
  .section {
    &__title {
      color: #EB5804;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .review {
    h3 {
      color: #ffffff;
    }
    p {
      font-weight: 600;
      font-size: 18px;
      color: #EB5804;
    }
    ul {
      padding-left: 0;
      list-style: none;
      display: flex;
      li {
        margin-right: 15px;
      }
    }
  }
}
</style>
