<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="recuperar-card">
      <h2 class="text-h6 header-register">Recuperar contraseña</h2>
      <q-form class="column q-pa-md q-pa-md q-gutter-md q-items-center" @submit.prevent="submitForm">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="ph" 
            placeholder="flopez@gmail.com" 
            hint="Correo" 
            :dense="dense" 
            :key="'username-input'"
          />
        </div>
        <q-card-actions class="q-px-md">
          <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Recuperar Contraseña " href="#/espera" rounded/>
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      ph: ref(''),
      isPwd: ref(true),
    };
  },
  
};
</script>
