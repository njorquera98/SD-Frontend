<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card>
      <div class="column q-pa-md">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 300px">
          <q-input filled v-model="ph" placeholder="correo@gmail.com" hint="Correo" :dense="dense" />
        </div>
        
        <div class="row q-gutter-y-md column" style="max-width: 300px">
          <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Contraseña">
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
          <a href="#">¿Olvidaste tu contraseña?</a>
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
  setup () {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),
    }
  }
}
</script>
