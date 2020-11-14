<template>
  <form class="card auth-card" @submit.prevent="onRegistor()">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="userEmail"
          :class="{ invalid: v$.userEmail.$invalid }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="userPassword"
          :class="{ invalid: v$.userPassword.$invalid }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          v-model.trim="userName"
          :class="{ invalid: v$.userName.$invalid }"
        />
        <label for="name">Имя</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
          <pre>{{ agree }}</pre>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "registration",
  data() {
    return {
      agree: false,
    };
  },
  methods: {
    async onRegistor() {
      const formData = {
        email: this.userEmail,
        password: this.userPassword,
        name: this.userName,
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
  setup() {
    const userEmail = ref("");
    const userPassword = ref("");
    const userName = ref("");

    const v$ = useVuelidate(
      {
        userEmail: {
          required,
          email,
        },
        userPassword: {
          required,
        },
        userName: {
          required,
        },
      },
      { userEmail, userPassword, userName }
    );

    return { v$, userEmail, userPassword, userName };
  },
};
</script>