<template>
  <div>
    <h2>Eliminar Estudiante</h2>
    <input v-model="idABuscar" type="number" placeholder="ID a eliminar" />
    <button @click="buscarParaBorrar">Verificar Estudiante</button>

    <div v-if="estudianteConfirmacion">
      <EstudianteDetalle :estudiante="estudianteConfirmacion" />
      <button @click="eliminar" style="background-color: red; color: white; margin-top: 10px;">
        Confirmar Eliminación Permanente
      </button>
    </div>
  </div>
</template>

<script>
import EstudianteDetalle from "@/components/EstudianteDetalle.vue";
import { consultarPorIdFachada, borrarFachada } from "@/clients/MatriculaClient";

export default {
  components: { EstudianteDetalle },
  data() {
    return { idABuscar: null, estudianteConfirmacion: null }
  },
  methods: {
    async buscarParaBorrar() {
      this.estudianteConfirmacion = await consultarPorIdFachada(this.idABuscar);
    },
    async eliminar() {
      await borrarFachada(this.estudianteConfirmacion.id);
      this.estudianteConfirmacion = null;
      this.idABuscar = null;
    }
  }
}
</script>