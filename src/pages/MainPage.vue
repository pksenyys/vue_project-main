<template>
    <h1 class="page-title"> </h1>
    <Navigation /> 
    <main-table />
    
  </template>
  
  <script setup lang="ts">
  import MainTable from '../components/MainPage/MainTable.vue'
  import Navigation from '../components/Navigation.vue'; // Импортируем навигационный компонент
  </script>
  
  <style scoped>
    h1{
      color: black;
      font-size: 15px;
    }
  </style>
  