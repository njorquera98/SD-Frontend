<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un nombre']"
      />

      <q-input
        filled
        v-model="lastname"
        label="Apellido"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un apellido']"
      />

      <q-input
        filled
        v-model="email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un email']"
      />

      <q-input
        filled
        v-model="telefono"
        label="Telefono"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un telefono']"
      />

      <q-input
        filled
        v-model="edad"
        label="Edad"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un edad']"
      />

      <q-input
        filled
        v-model="f_nacimiento"
        label="Fecha de Nacimiento"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un fecha de nacimiento']"
      />

      <q-input
        filled
        v-model="prevision"
        label="Prevision"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un prevision']"
      />

      <q-input
        filled
        v-model="objetivo"
        label="Objetivo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un objetivo']"
      />

      <q-input
        filled
        v-model="diagnostico"
        label="Diagnostico"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese un diagnostico']"
      />

      <div>
        <q-btn label="Ingresar" type="submit" color="primary"/>
        <q-btn label="Eliminar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const lastname = ref(null)
    const email = ref(null)
    const telefono = ref(null)
    const edad = ref(null)
    const f_nacimiento = ref(null)
    const prevision = ref(null)
    const objetivo = ref(null)
    const diagnostico = ref(null)
    const accept = ref(false)

    return {
      name,
      lastname,
      email,
      telefono,
      edad,
      f_nacimiento,
      prevision,
      objetivo,
      diagnostico,
      accept,

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
        lastname.value = null
        email.value = null
        telefono.value = null
        edad.value = null
        f_nacimiento.value = null
        prevision.value = null
        objetivo.value = null
        diagnostico.value = null
        accept.value = false
      }
    }
  }
}
</script>
