<template>
    <h1 class="page-title"></h1>
    
    <login-table />
  </template>
  
  <script setup lang="ts">
  import LoginTable from '../components/LoginPage/LoginTable.vue'
  </script>
  
  <style scoped>
  .page-title {
    margin-bottom: 20px; /* Отступ снизу (при необходимости измените) */
  }
  </style>