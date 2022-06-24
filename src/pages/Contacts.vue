<template>
  <div class="books-page container">
    <h2>Контакты партнеров-изданий</h2>
    <info-publication :users="users"/>
  </div>
</template>

<script>
import InfoPublication from "@/components/InfoPublication";
import users from "@/mocks/contacts";

export default {
  components: {InfoPublication},
  data() {
    return {
      users
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
