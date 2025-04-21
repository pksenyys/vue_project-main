<template>
  <div class="main-page">
    <div class="content">
      <h1 class="welcome-text">Добро пожаловать!</h1>
      <div class="welcome-image-container">
        <img :src="welcomeImage" alt="Приветственная картинка" class="welcome-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import welcomeImage from '@/assets/icons/icons8-банан-64.png';

</script>

<style scoped>
.main-page {
  padding: 0;
  font-family: 'Inter', sans-serif;
}

.content {
  text-align: center;
  margin-top: 60px; /* Уменьшен отступ сверху для контента */
}

.welcome-text {
  font-weight: 600; /* Установлен полужирный шрифт для текста приветствия */
  font-size: 24px; /* Увеличен размер шрифта */
  margin-bottom: 20px; /* Добавлено пространство ниже текста */
}

.welcome-image-container {
  border: 2px solid #363636; /* Рамка вокруг картинки */
  border-radius: 10px; /* Скругленные углы для рамки */
  padding: 10px; /* Внутренние отступы */
  display: inline-block; /* Центрирование контейнера */
}

.welcome-image {
  max-width: 500%; /* Ограничение ширины по контейнеру */
  height: auto; /* Автоматическая высота для сохранения пропорций */
}
</style>
