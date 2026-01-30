<template>
  <table border="1" class="tabla-estudiantes">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Provincia</th>
        <th>Género</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="est in listaEstudiantes" :key="est.id">
        <td>{{ est.id }}</td>
        <td>{{ est.nombre }}</td>
        <td>{{ est.apellido }}</td>
        <td>{{ est.provincia }}</td>
        <td>{{ est.genero }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {

  props: ['listaEstudiantes']
}
</script>

<style scoped>
.tabla-estudiantes {
  width: 80%;
  margin: 30px auto; 
  border-collapse: collapse;
}

th { 
  background-color: #f2f2f2; 
  padding: 12px; 
}

td { 
  padding: 10px; 
  text-align: center; 
  border: 1px solid #ddd;
}
</style>