<template>
    <div class="search flex">
        <input 
        type="text" 
        class="search"
        v-model="searchText"
        >
        <button 
        type="button" 
        @click="$emit('search', searchText)">
        Найти
      </button>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
input {
    height: 25px;
    margin-left: 20px;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}
</style>