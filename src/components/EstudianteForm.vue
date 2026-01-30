<template>
  <div class="formulario">
    <h3>{{ titulo }}</h3>
    
    <div class="grupo" v-if="necesitaId">
      <label>ID del Estudiante:</label>
      <input v-model="estudiante.id" type="number" placeholder="Ingrese ID para buscar/editar" />
    </div>

    <div class="grupo">
      <label>Nombre:</label>
      <input v-model="estudiante.nombre" />
    </div>

    <div class="grupo">
      <label>Apellido:</label>
      <input v-model="estudiante.apellido" />
    </div>

    <div class="grupo">
      <label>Fecha de Nacimiento:</label>
      <input v-model="estudiante.fechaNacimiento" type="datetime-local" />
    </div>

    <div class="grupo">
      <label>Provincia:</label>
      <input v-model="estudiante.provincia" />
    </div>

    <div class="grupo">
      <label>Género:</label>
      <select v-model="estudiante.genero">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
    </div>

    <button @click="prepararYEnviar">{{ textoBoton }}</button>
  </div>
</template>

<script>
export default {
  // Cambiamos bloquearId por necesitaId para mayor claridad
  props: ["titulo", "textoBoton", "necesitaId", "estudianteInicial"],
  data() {
    return {
      estudiante: this.estudianteInicial || {
        id: null,
        nombre: "",
        apellido: "",
        provincia: "",
        genero: "M",
        fechaNacimiento: null
      }
    };
  },
  methods: {
    prepararYEnviar() {
      // Enviamos el objeto completo, asegurándonos de que el ID esté presente si se escribió
      this.$emit("accion", this.estudiante);
    }
  }
};
</script>

<style scoped>
.formulario { border: 1px solid #42b983; padding: 25px; width: 350px; border-radius: 8px; margin: 20px auto; background-color: white; }
.grupo { margin-bottom: 15px; text-align: left; }
label { display: block; font-weight: bold; margin-bottom: 5px; }
input, select { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
button { width: 100%; padding: 10px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
</style>