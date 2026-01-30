<template>
  <div class="view-container">
    <div v-if="notificacion" :class="['status-msg', tipoError ? 'error' : 'success']">
      {{ notificacion }}
    </div>

    <div class="buscador-id">
      <label>ID para actualización parcial:</label>
      <input v-model="idABuscar" type="number" />
      <button @click="cargarParaParche">Cargar Datos</button>
    </div>

    <EstudianteForm 
      v-if="estudianteCargado"
      titulo="Actualización Parcial" 
      textoBoton="Parchear Datos" 
      :necesitaId="true" 
      :estudianteInicial="estudianteCargado"
      @accion="ejecutarPatch" 
    />
  </div>
</template>

<script>
import EstudianteForm from "@/components/EstudianteForm.vue";
import { consultarPorIdFachada, actualizarParcialFachada } from "@/clients/MatriculaClient";

export default {
  components: { EstudianteForm },
  data() {
    return {
      idABuscar: null,
      estudianteCargado: null,
      notificacion: "",
      tipoError: false
    }
  },
  methods: {
    async cargarParaParche() {
      const res = await consultarPorIdFachada(this.idABuscar);
      if (res) {
        this.estudianteCargado = res;
        this.notificacion = "Datos cargados para parchear.";
        this.tipoError = false;
      } else {
        this.notificacion = "ID no encontrado.";
        this.tipoError = true;
      }
      setTimeout(() => { this.notificacion = "" }, 5000);
    },
    async ejecutarPatch(datos) {
      try {
        await actualizarParcialFachada(datos.id, datos);
        this.notificacion = "Campos actualizados correctamente.";
        this.tipoError = false;
      } catch (e) {
        this.notificacion = "Error al aplicar cambios parciales.";
        this.tipoError = true;
      }
      setTimeout(() => { this.notificacion = "" }, 5000);
    }
  }
}
</script>

<style scoped>
.status-msg {
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}
.success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
.error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }

.buscador-id { margin-bottom: 20px; text-align: center; }
.buscador-id input { margin: 0 10px; padding: 5px; }
</style>