<template>
  <form class="card auth-card" @submit.prevent="onLogin()">
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
        <small v-if="!v$.userEmail.required" class="helper-text invalid"
          >Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          :class="{ invalid: v$.userPassword.$invalid }"
          v-model="v$.userPassword.$model"
          class="validate"
        />
        <label for="password">Пароль</label>
        <small v-if="!v$.userPassword.required" class="helper-text invalid"
          >Password</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/registor">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    onLogin() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.$router.push("/");
      }

      const formData = {
        email: this.userEmail,
        password: this.userPassword,
      }
      
      console.log(formData)
    },
  },
  setup() {
    const userEmail = ref("");
    const userPassword = ref("");

    const v$ = useVuelidate(
      {
        userEmail: {
          required,
          email,
        },
        userPassword: {
          required,
        },
      },
      { userEmail, userPassword }
    );

    return { v$, userEmail, userPassword };
  },
};
</script>