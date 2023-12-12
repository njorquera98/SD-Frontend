<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="login-card">
      <h2 class="text-h6 header-register">Inicio de sesion</h2>
      <q-form class="column q-pa-md q-pa-md q-gutter-md q-items-center" @submit.prevent="submitForm">
        <div class="row q-gutter-y-md column vertical-middle" style="max-width: 400px">
          <q-input 
            filled 
            v-model="login.username" 
            placeholder="Jperez" 
            hint="Nombre de usuario" 
            :dense="dense" 
            :key="'username-input'"
          />
        </div>
        
        <div class="row q-gutter-y-md column" style="max-width: 400px">
          <q-input 
            v-model="login.password" 
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
          <q-btn rounded unelevated color="light-blue-7" size="lg" class="full-width" label="Iniciar sesión" type="submit"/>
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <a href="#/recuperar">¿Olvidaste tu contraseña?</a>
        </q-card-section>
        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">¿No estás registrado? <a href="#/register">Regístrate</a></p>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useQuasar} from 'quasar';
import { mapActions } from 'vuex';


let $q

export default {
  data() {
    return {
      
      isPwd: ref(true),
      login: {
        username: '',
        password: ''
        
      }
    };
  },
  methods: {
    ...mapActions('auth', ['doLogin']),
    async submitForm(){
      if(!this.login.username || !this.login.password){
        console.log('error')
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: `Datos ingresados invalidos`,
          //${error.message}
        })
      }
      else if(this.login.password.length < 6){
        console.log('Contraseña corta')
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: `Minimo 6 caracteres de contraseña`,
          
        })
      }
      else{
        try{
          await this.doLogin(this.login)
          const toPath = this.$route.query.to || '/table'
          this.$router.push(toPath)
          console.log('hola')
        }catch (err){
          
          const errorMessage = err.response?.data?.message || 'Datos incorrectos';
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: errorMessage,
          });

          
        }
      }
    }
  },
  mounted(){
    $q = useQuasar()
  }
  
};
</script>
