<template>
  <div>
    <h2>Listado de Estudiantes</h2>
    <button @click="refrescar">Actualizar Lista</button>
    
    <EstudianteTabla :listaEstudiantes="lista" />
  </div>
</template>

<script>
import EstudianteTabla from "@/components/EstudianteTabla.vue";
import { consultarTodosFachada } from "@/clients/MatriculaClient";

export default {
  components: { EstudianteTabla },
  data() {
    return { lista: [] }
  },
  methods: {
    async refrescar() {
      this.lista = await consultarTodosFachada();
    }
  },
  async mounted() {
    this.refrescar();
  }
}
</script>