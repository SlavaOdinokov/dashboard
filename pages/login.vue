<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
        <form @submit.prevent="onLogin">
          <FieldValidator
            name="email"
            rules="email|required"
            mode="lazy"
            slim
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Электронная почта</label>
              <input
                name="email"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.length > 0 }"
                placeholder="Электронная почта"
                v-model="loginForm.email"
              />
              <div
                v-show="errors"
                v-for="(error, key) in errors"
                :key="`email-${key}`"
                class="invalid-feedback"
              >
                {{ error }}
              </div>
            </div>
          </FieldValidator>
          <FieldValidator
            name="password"
            rules="required"
            mode="lazy"
            slim
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label>Пароль</label>
              <input
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.length > 0 }"
                placeholder="Пароль"
                v-model="loginForm.password"
              />
              <div
                v-show="errors"
                v-for="(error, key) in errors"
                :key="`password-${key}`"
                class="invalid-feedback"
              >
                {{ error }}
              </div>
            </div>
          </FieldValidator>
          <button type="submit" class="btn btn-black">Войти</button>
          <!-- <button type="submit" class="btn btn-secondary">Register</button> -->
          <div v-if="loginFormError" class="login-form__network-error">
            {{ loginFormError }}
          </div>
        </form>
      </FormValidator>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'LoginPage',
  layout: 'unauthorized',
  components: {
    FormValidator: ValidationObserver,
    FieldValidator: ValidationProvider
  },
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    loginFormError: null
  }),
  methods: {
    async onLogin() {
      const isCorrect = await this.$refs.authForm.validate()

      if (isCorrect) {
        try {
          const response = await this.$auth.loginWith('local', {
            data: this.loginForm
          })
          this.$router.push('/home')
        } catch (err) {
          console.log(err.response)
          this.loginFormError = err.response.data.message
        }
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
.login-form__network-error {
  border-radius: 6px;
  border: 1px solid rgba(255, 0, 0, .6);
  padding: 10px;
  color: #fff;
  background: rgba(255, 0, 0, .4);
  margin-top: 10px;
}
.main-head {
  height: 150px;
  background: #fff;
}
.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}
.main {
  padding: 0px 10px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}
@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }
  .register-form {
    margin-top: 10%;
  }
}
@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }
  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .login-form {
    margin-top: 80%;
  }
  .register-form {
    margin-top: 20%;
  }
}
.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}
.login-main-text h2 {
  font-weight: 300;
}
.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>
