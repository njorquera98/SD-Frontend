<template>
    <q-page padding>
        <q-card >
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
            >
            <q-input
                filled
                style="max-width: 300px"
                v-model="username"
                label="Nombre de usuario"
                hint="Nombre de usuario"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Escriba Nombre de usuario']"
            />
            <p>
            <q-input
                filled
                style="max-width: 300px"
                v-model="name"
                label="Ej:Jorge"
                hint="Nombre"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Escriba nombre']"
            />
            <q-input
                filled
                v-model="last_names"
                style="max-width: 300px"
                label="Ej:Molina Gonzales"
                hint="Apellidos"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Escriba Apellidos']"
            />
            </p>
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
          <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Registrar" />
        </q-card-actions>
    </q-form>
        </q-card>
    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const username = ref(null)
    const name = ref(null)
    const accept = ref(false)
    const last_names = ref(null)

    return {
      username,
      name,
      accept,
      last_names,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>