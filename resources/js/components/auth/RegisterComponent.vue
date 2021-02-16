<template>
  <div class="mx-auto border border-dark p-4 rounded form-login">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Email</label>
        <input v-model="form.email"
          type="text" name="username" class="form-control"
          :class="{ 'is-invalid': form.errors.has('username') }"/>
        <has-error :form="form" field="username"></has-error>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="form.password"
          type="password" name="password" class="form-control"
          :class="{ 'is-invalid': form.errors.has('password') }"/>
        <has-error :form="form" field="password"></has-error>
      </div>    

       <!-- <div class="form-group">
        <label>Confirm Password</label>
        <input v-model="form.password_confirmation"
          type="password" name="password_confirmation" class="form-control"
          :class="{ 'is-invalid': form.errors.has('password_confirmation') }"/>
        <has-error :form="form" field="password"></has-error>
      </div> -->

      <button :disabled="form.busy" type="submit" class="btn btn-primary">
        Log In
      </button>
    </form>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
    };
  },
  methods: {
    register() {
        this.form.post('/api/auth/login')
        .then(({ data }) => { console.log(data) })
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>


