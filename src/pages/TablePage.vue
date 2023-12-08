<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'
export default defineComponent({
  // name: 'PageName'
  name: 'TablePage',
  setup(){
    const posts = ref([])
    const columns = [
        { name: 'id', field: 'id', label: 'id', sortable: true, align: 'left'},
        { name: 'username', field: 'username', label: 'Nombre de usuario', sortable: true, align: 'left' },
        { name: 'name', field: 'name', label: 'Nombre', sortable: true, align: 'left' },
        { name: 'email', field: 'email', label: 'Correo', sortable: true, align: 'left' },
        { name: 'password', field: 'password', label: 'Contraseña', sortable: true, align: 'left' },
      ]
      onMounted(() => {
        gestPosts()
      })
    
      const gestPosts = async() => {
        try{
          const { data } = await api.get('http://localhost:3000/users')
          posts.value = data
          
        } catch(error){
          console.error(error)
        }
      }
      return {
        posts,
        columns
      }
  }
})
</script>
