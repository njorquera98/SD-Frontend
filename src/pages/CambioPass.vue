<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="cambiar-card">
      <h2 class="text-h6 header-register">Cambiar la clave</h2>
      <div class="column q-pa-md q-pa-md q-gutter-md q-items-center">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="ph" 
            placeholder="Jperez" 
            hint="Username" 
            :dense="dense" 
            :key="'username-input'"
          />
        </div>
        <!-- Password 1 -->
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            v-model="password1" 
            filled 
            :type="isPwd1 ? 'password' : 'text'" 
            hint="Contraseña" 
            :key="'password-input'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd1 = !isPwd1"
              />
            </template>
          </q-input>
          <!-- Passowrd 2 -->
          <q-input 
            v-model="password2" 
            filled 
            :type="isPwd2 ? 'password' : 'text'" 
            hint="Contraseña" 
            :key="'password-input'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd2 = !isPwd2"
              />
            </template>
          </q-input>
        </div>
        <q-card-actions class="q-px-md">
          <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Recuperar Contraseña" href="/" rounded/>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      ph: ref(''),
      password1: ref(''),
      password2: ref(''),
      isPwd1: ref(true),
      isPwd2: ref(true),
    };
  },
};
</script>
