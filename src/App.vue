<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script setup>
// Импортируем необходимые вещи
import { useRouter } from 'vue-router';
import 'typeface-inter'; 

const router = useRouter();
// Все необходимые функции для управления маршрутизацией могут быть добавлены здесь
</script>

<style>
/* Ваши стили */
</style>
