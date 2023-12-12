<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="register-card">
      <h2 class="text-h6 header-register">Registro de usuario</h2>
      <div class="column q-pa-md q-gutter-md q-items-center">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="username"
            class="full-width"
            label="Nombre de usuario"
            hint="Nombre de usuario"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Escriba Nombre de usuario']"
          />
          <q-input
            filled
            class="full-width"
            v-model="name"
            label="Ej: Jorge"
            hint="Nombre"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Escriba Nombre']"
          />
          <q-input
            filled
            v-model="email"
            class="full-width"
            label="Ej: correo@gmail.com"
            hint="Correo"
            lazy-rules
            :rules="[ 
            val => val && val.length > 0 || 'Escriba Correo',
            val => isEmailValid(val) || 'Correo no válido'
            ]"
          />
          <div class="row q-gutter-y-md full-width">
            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              hint="Contraseña"
              class="full-width"
              :key="isPwd ? 'password-input' : 'text-input'"
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
            <q-btn
              unelevated
              rounded
              color="light-blue-7"
              size="lg"
              class="full-width"
              label="Registrar"
              type="submit"
            />
          </q-card-actions>
        </q-form>
      </div>
    </q-card>
  </div>

</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const $q = useQuasar()
    const router = useRouter();

    const username = ref(null)
    const name = ref(null)
    const password = ref(null)
    const accept = ref(false)
    const email = ref(null)
    const isPwd = ref(true)

    const isEmailValid = (value) => {
      // Expresión regular que permite '@gmail.com' o '@alumnos.uta.cl'
      const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|alumnos\.uta\.cl)$/;

      return emailRegex.test(value);
    };

    const onSubmit = async () => {
      try {
        // Construye el objeto de datos a enviar al servidor
        const userData = {
          username: username.value,
          name: name.value,
          email: email.value,
          password: password.value,
        };

        // Realiza la solicitud POST al servidor
        const response = await api.post('http://localhost:3000/auth/register', userData);
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'check_circle',
          message: 'Usuario registrado con éxito',
        });
        // Dirige a la ruta Inicio de sesion
        
        router.push('/');

        

      } catch (error) {
        //Notificacion de error al ingresar 
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: `Error al registrar usuario: nombre de usuario o correo ya registrado`,
          //${error.message}
        });
      }
    };

    const onReset = () => {
      name.value = null
      age.value = null
      accept.value = false
    }

    return {
      username,
      name,
      accept,
      email,
      password,
      isPwd,
      isEmailValid,
      onSubmit,
      onReset
    }
  }
}
</script>