<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="login-card">
      <h2 class="text-h6 header-register">Inicio de sesión</h2>
      <div class="column q-pa-md q-pa-md q-gutter-md q-items-center">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="username" 
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
          <q-btn 
            unelevated 
            rounded
            color="light-blue-7" 
            size="lg" 
            class="full-width" 
            label="Iniciar sesión" 
            @click="login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <a href="#/recuperar">¿Olvidaste tu contraseña?</a>
          <p class="text-grey-6">¿No estás registrado? <a href="#/register">Regístrate</a></p>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const $q = useQuasar()
    const username = ref('');
    const password = ref('');
    const isPwd = ref(true);
    

    const login = () => {
      axios.post('http://localhost:3000/auth/login', { username: username.value, password: password.value })
        .then(response => {
          // Manejar la respuesta del servidor aquí
          const jwtToken = response.data.token;
          console.log('Token JWT:', jwtToken);
          // Almacenar el token en localStorage o en una cookie según tus necesidades
          localStorage.setItem('jwtToken', jwtToken);
          $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'check_circle',
          message: 'Bienvenido',
        });

          // Redirigir a la página de inicio o realizar otras acciones después del inicio de sesión
          window.location.href = '#/tabla';
        })
        .catch(error => {
          // Manejar errores aquí
          console.error('Error al intentar iniciar sesión:', error);
          $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Error de inicio sesión',
        });
        });
    };

    return {
      username,
      password,
      isPwd,
      login,
    };
  },
};
</script>
