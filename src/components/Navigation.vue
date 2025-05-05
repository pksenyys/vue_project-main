<!-- Navigation.vue -->
<template>
    <nav class="navigation-menu">
      <button @click="goToAccount">
        <img :src="accountIcon" alt="Аккаунт" class="icon" /> <span class="button-text">Аккаунт</span>
      </button>
      <button @click="goToExercises">
        <img :src="exercisesIcon" alt="Упражнения" class="icon" /> <span class="button-text">Упражнения</span>
      </button>
      <button @click="goToStatistics">
        <img :src="statisticsIcon" alt="Статистика" class="icon" /> <span class="button-text">Статистика</span>
      </button>
      <button @click="goToHelp">
        <img :src="helpIcon" alt="Справка" class="icon" /> <span class="button-text">Справка</span>
      </button>
      <button @click="logout">
        <img :src="logoutIcon" alt="Выход" class="icon" /> <span class="button-text">Выход</span>
      </button>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import accountIcon from '@/assets/icons/account.png';
  import exercisesIcon from '@/assets/icons/exercises.jpg';
  import statisticsIcon from '@/assets/icons/statistics.jpg';
  import helpIcon from '@/assets/icons/help.jpg';
  import logoutIcon from '@/assets/icons/logout.jpg';
  
  const router = useRouter();
  
  const goToAccount = () => {
    router.push('/account');
  };
  
  const goToExercises = () => {
    router.push('/exercises');
  };
  
  const goToStatistics = () => {
    router.push('/statistics');
  };
  
  const goToHelp = () => {
    router.push('/help');
  };
  
  const logout = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .navigation-menu {
    display: flex;
    justify-content: space-between;
    background-color: #fff5a0;
    padding: 20px 10px; /* Уменьшены отступы для лучшего вида */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  button {
    flex: 1;
    padding: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 25px; /* Увеличен размер шрифта */
    color: black;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 15px; /* Скругленные углы кнопок */
    display: flex; /* Используем flexbox для выравнивания текста и иконки внутри кнопки */
    align-items: center; /* Центрируем элементы по вертикали */
    justify-content: center; /* Центрируем элементы по горизонтали */
  }
  
  button:hover {
    background-color: rgba(255, 250, 250, 0.8);
  }
  
  .icon {
    width: 50px; /* Увеличен размер иконок */
    height: 50px;
    margin-right: 8px;
  }
  
  .button-text {
    vertical-align: middle; /* Выравнивание текста по центру относительно иконки */
  }
  </style>
  