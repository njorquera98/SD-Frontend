<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="espera-card">
      <h2 class="text-h6 header-register">Recuperacion de contraseña</h2>
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
        
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="ph" 
            placeholder="12345" 
            hint="Ingrese codigo" 
            :dense="dense" 
            :key="'username-input'"
          />
        </div>
        <q-card-actions class="q-px-md">
          <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Recuperar Contraseña" href="#/cambiar" rounded/>
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
      password: ref(''),
    };
  },
};
</script>
