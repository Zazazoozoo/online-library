<template>
  <form class="sign-up" @submit.prevent="checkForm">
    <div class="form-group">
      <label for="login">Логин <span class="required">*</span></label>
      <input
        id="login"
        class="form-control"
        v-model.trim="login"
      >
        <!-- <small class="v$.form.login.$error ? 'is-invalid' : '' "></small> -->
        <small
          class="error"
          v-for="(error, index) of v$.login.$errors"
          :key="index"
        >
          {{ capitalizeFirstLetter(error.$property) }} {{ error.$message }}
        </small>
      <!-- <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
        Обязательное поле
      </p>
      <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
        Должно быть больше 5-ти символов
      </p> -->
    </div>
    <div class="form-group">
      <label for="login">Почта:</label>
      <!-- <input
        id="email"
        type="email"
        class="form-control"
        :class="$v.form.email.$error ? 'is-invalid' : '' "
        v-model.trim="$v.form.email"
      > -->
      <!-- <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
        Обязательное поле
      </p>
      <p v-if="$v.form.email.$dirty && !$v.form.email.minLength" class="invalid-feedback">
        Email некорректный
      </p> -->
    </div>
    <div class="form-group">
      <label for="login">Пароль:</label>
      <!-- <input
        id="password"
        type="password"
        class="form-control"
        :class="$v.form.password.$error ? 'is-invalid' : '' "
        v-model.trim="form.password"
      >
      <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">
        Обязательное поле
      </p>
      <p v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="invalid-feedback">
        Пароль должен состоять не менее из 8-ми символов
      </p> -->
    </div>
    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="form.country">
        <option 
        v-for="(country, index) in countries"
        :value="country.value"
        :key="index"
        >
        {{country.label}}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Любимые темы:</label>
      <select id="themes" class="form-control" v-model="form.theme" multiple>
        <option
        v-for="(theme, index) in themes"
        :value="theme.value"
        :key="index"
        >
        {{theme.label}}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" value="1" class="form-check-input" id="notification" v-model="form.agreement">
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
    </div>
    <div class="flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" v-model="form.gender">
        <label class="form-check-label" for="male">
          Мужчина
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" v-model="form.gender">
        <label class="form-check-label" for="female">
          Женщина
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script>
// import { validationMixin } from 'vuelidate'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  // mixins: [validationMixin],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
          login: '',
          email: '',
          password: '',
          country: 'Russia',
          theme: ['IT'],
          agreement: [],
          gender: 'male',
        themes: [
            {
              label: 'Программирование',
              value: 'IT'
            },
            {
              label: 'Фильмы',
              value: 'Movies'
            },
            {
              label: 'Мода',
              value: 'Fashion'
            },
            {
              label: 'Путешествия',
              value: 'Travel'
            }
          ],
        countries: [
            {
              label: 'Россия',
              value: 'Russia'
            },
            {
              label: 'Армения',
              value: 'Armenia'
            },
            {
              label: 'Румыния',
              value: 'Romania'
            }
          ]
      }
    },
    validations: {
      form: {
        login: { required, minLength: minLength(5) }, //обязательное поле и еще не меньше пяти символов
        email: { required, email },
        password: { required },
      }
    },
    methods: {
      checkForm() {
        this.v$.form.$touch()
        if (!this.v$.form.$error) {
          console.log('Валидация прошла успешно')
        }
      },
      capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    }
  }
</script>

<style lang="scss" scoped>
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>
<!-- https://stackoverflow.com/questions/66945380/cant-validate-email-with-vuelidate-in-vue3 --> норм ссылка кста работает
