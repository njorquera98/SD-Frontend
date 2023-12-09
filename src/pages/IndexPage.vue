<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="login-card">
      <h2 class="text-h6 header-register">Inicio de sesion</h2>
      <div class="column q-pa-md q-pa-md q-gutter-md q-items-center">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="text" 
            placeholder="Jperez" 
            hint="Username" 
            :dense="dense" 
            :key="'username-input'"
          />
        </div>
        
        <div class="row q-gutter-y-md column" style="max-width: 400px">
          <q-input 
            v-model="password" 
            filled 
            :type="isPwd ? 'password' : 'text'" 
            hint="Contraseña" 
            :key="'password-input'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <q-card-actions class="q-px-md">
          <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Iniciar sesión" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <a href="#/recuperar">¿Olvidaste tu contraseña?</a>
        </q-card-section>
        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">¿No estás registrado? <a href="#/register">Regístrate</a></p>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),
    };
  },
};
</script>
