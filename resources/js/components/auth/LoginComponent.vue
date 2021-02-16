<template>
  <div class="mx-auto border border-dark p-4 rounded form-login">
    <h1>Login</h1>
    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
      <div class="form-group">
        <label>Username</label>
        <input v-model="form.username"
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
        username: "",
        password: "",
      }),
    };
  },
  methods: {
    login() {
     alert('SIMON PANGAN');
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>


