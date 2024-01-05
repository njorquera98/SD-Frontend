<template>
  <div class="q-pa-md">
    <q-table
      title="Pacientes"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn round @click='redirectToNewPage'>
          <q-avatar size="42px">
            <img src="https://static.vecteezy.com/system/resources/previews/021/352/965/original/user-icon-person-profile-avatar-with-plus-symbol-add-user-profile-icon-png.png">
          </q-avatar>
        </q-btn>
      </template>
      <template v-slot:body-cell-boton="props">
        <q-td :props="props">
          <q-btn @click="redirectToPatient(props.row)" round>
            <q-avatar size="42px">
            <img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/view-512.png">
          </q-avatar>
          </q-btn>
        </q-td>
      </template>
  </q-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'
import { Dialog, useQuasar } from 'quasar'
export default defineComponent({
  // name: 'PageName'
  name: 'TablePage',
  setup(){
    const router = useRouter()
    const posts = ref([])
    const columns = [
        { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left'},
        { name: 'name', field: 'name', label: 'Nombre', sortable: true, align: 'left' },
        { name: 'username', field: 'username', label: 'Apellidos', sortable: true, align: 'left' },
        { name: '#', field: '#', label: 'Celular', sortable: true, align: 'left' },
        { name: '#', field: '#', label: 'Prevision', sortable: true, align: 'left' },
        { name: 'boton', label: 'Acción', align: 'left' },

      ]
      onMounted(() => {
        gestPosts()
      })
    
      const gestPosts = async() => {
        try{
          //Cambiar la direccion del servidor
          const { data } = await api.get('http://localhost:3000/users')
          posts.value = data
          
        } catch(error){
          console.error(error)
        }
      }
      const redirectToNewPage = () => {
        // Reemplaza 'nombre-de-ruta' con el nombre real de la ruta a la que deseas redirigir
        router.push('/registerPatient'); 
      }
      const redirectToPatient = (row:any) => {
        router.push(`/registerPatient/${row.id}`);
      }
      return {
        posts,
        columns,
        redirectToNewPage
      }
  }
})
</script>
