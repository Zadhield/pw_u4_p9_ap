<template>
  <div v-if="estudiante" class="detalle-card">
    <h3>Información del Estudiante</h3>
    <p><strong>ID:</strong> {{ estudiante.id }}</p>
    <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
    <p><strong>Apellido:</strong> {{ estudiante.apellido }}</p>
    <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
    <p><strong>Género:</strong> {{ estudiante.genero === 'M' ? 'Masculino' : 'Femenino' }}</p>
    
    <div v-if="estudiante.links" class="links-seccion">
      <h4>Enlaces Relacionados:</h4>
      <ul>
        <li v-for="link in estudiante.links" :key="link.rel">
          {{ link.rel }}: {{ link.href }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  props: ['estudiante']
}
</script>

<style scoped>
.detalle-card {
  border: 2px solid #34495e;
  padding: 20px;
  border-radius: 10px;
  background-color: #ecf0f1;
  max-width: 400px;
  margin: 20px auto;
  text-align: left; 
}

.links-seccion {
  margin-top: 15px;
  font-size: 0.8em;
  color: #7f8c8d;
}
</style>