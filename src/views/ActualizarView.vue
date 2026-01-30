<template>
  <div class="view-container">
    <div v-if="notificacion" :class="['status-msg', tipoError ? 'error' : 'success']">
      {{ notificacion }}
    </div>

    <div class="buscador-id">
      <label>ID a buscar para editar:</label>
      <input v-model="idABuscar" type="number" />
      <button @click="cargarDatosEstudiante">Cargar Datos</button>
    </div>

    <EstudianteForm 
      v-if="estudianteCargado"
      titulo="Editar Información Completa" 
      textoBoton="Guardar Cambios Totales" 
      :necesitaId="true" 
      :estudianteInicial="estudianteCargado"
      @accion="enviarActualizacionFinal" 
    />
  </div>
</template>

<script>
import EstudianteForm from "@/components/EstudianteForm.vue";
import { consultarPorIdFachada, actualizarFachada } from "@/clients/MatriculaClient";

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
    async cargarDatosEstudiante() {
      const res = await consultarPorIdFachada(this.idABuscar);
      if (res) {
        this.estudianteCargado = res;
        this.notificacion = "Datos cargados. Ya puede editar.";
        this.tipoError = false;
      } else {
        this.notificacion = "Estudiante no encontrado.";
        this.tipoError = true;
      }
      setTimeout(() => { this.notificacion = "" }, 5000);
    },
    async enviarActualizacionFinal(datosEditados) {
      try {
        await actualizarFachada(datosEditados.id, datosEditados);
        this.notificacion = "Actualización exitosa.";
        this.tipoError = false;
      } catch (e) {
        this.notificacion = "Falló la actualización en el servidor.";
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