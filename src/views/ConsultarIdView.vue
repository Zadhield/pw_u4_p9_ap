<template>
  <div>
    <h1>Buscador de Estudiantes</h1>
    <input v-model="idInput" type="number" placeholder="Ingrese ID a buscar" />
    <button @click="realizarBusqueda">Consultar</button>

    <EstudianteDetalle :estudiante="estudianteEncontrado" />
  </div>
</template>

<script>
import EstudianteDetalle from "@/components/EstudianteDetalle.vue";
import { consultarPorIdFachada } from "@/clients/MatriculaClient";

export default {
  components: { EstudianteDetalle },
  data() {
    return {
      idInput: null,
      estudianteEncontrado: null
    }
  },
  methods: {
    async realizarBusqueda() {
      this.estudianteEncontrado = await consultarPorIdFachada(this.idInput);
    }
  }
}
</script>