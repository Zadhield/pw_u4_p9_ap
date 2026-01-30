<template>
  <div>
    <div v-if="notificacion" :class="['status-msg', tipoError ? 'error' : 'success']">
      {{ notificacion }}
    </div>

    <EstudianteForm 
      titulo="Registrar Nuevo Estudiante" 
      textoBoton="Guardar Datos" 
      :bloquearId="false"
      @accion="ejecutarGuardar" 
    />
  </div>
</template>

<script>
import EstudianteForm from "@/components/EstudianteForm.vue";
import { guardarFachada } from "@/clients/MatriculaClient";

export default {
  components: { EstudianteForm },
  data() {
    return {
      notificacion: "",
      tipoError: false
    }
  },
  methods: {
    async ejecutarGuardar(data) {
      try {
        await guardarFachada(data);
        this.notificacion = " Estudiante registrado exitosamente.";
        this.tipoError = false;
      } catch (e) {
        this.notificacion = " Error al procesar el registro.";
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
</style>