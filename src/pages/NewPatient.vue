<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-card class="register-patient-card">
      <h2 class="text-h6 header-register">Registro de Paciente</h2>
      <div class="column q-pa-md q-gutter-md q-items-center">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            class="full-width"
            label="Ej: Mathias"
            hint="Nombre de paciente"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Escriba Nombre de paciente']"
          />
          <q-input
            filled
            class="full-width"
            v-model="apellidos"
            label="Ej: Araya Perez"
            hint="Apellidos"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Escriba Apellido']"
          />
          <q-select 
          class="full-width"
          filled v-model="prevision" 
          :options="options" 
          label="" 
          hint="Prevision"
          />
          <q-input
            filled
            v-model="celular"
            class="full-width"
            label="Ej: 994914688"
            hint="Celular"
            mask="#########"
            lazy-rules
            :rules="[ 
            val => /^\d+$/.test(val) && val.length === 9 || 'Ingrese un número de celular válido(9 digitos)',
            ]"
          />
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
  </q-page>

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

    const apellidos = ref(null)
    const name = ref(null)
    const accept = ref(false)
    const prevision = ref(false)
    const celular = ref(null)
    const options = ref(null);


    const onSubmit = async () => {
      try {
        // Construye el objeto de datos a enviar al servidor
        const userData = {
          name: name.value,
          apellidos: apellidos.value,
          options: options.value,
          prevision: prevision.value,
          celular: celular.value
        };

        // Realiza la solicitud POST al servidor
        const response = await api.post('#', userData);
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'check_circle',
          message: 'Paciente registrado con éxito',
        });
        // Dirige a la ruta Inicio de sesion
        
        router.push('/');

        

      } catch (error) {
        //Notificacion de error al ingresar 
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: `Error al registrar usuario: nombre de usuario`,
          //${error.message}
        });
        router.push('/table');
      }
    };

    const onReset = () => {
      name.value = null
      age.value = null
      accept.value = false
    }
    

    return {
      name,
      apellidos,
      accept,
      celular,
      onSubmit,
      onReset,
      prevision: ref(null),
      options: [
        'Fonasa', 'Isapre',
      ]
    }
  }
}
</script>