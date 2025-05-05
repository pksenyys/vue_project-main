<template>
  <h1>СКОРОСТНАЯ ПАМЯТЬ</h1>
  <div class="login-container">
    <div class="login-card">
      <h2>ВХОД</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">ЛОГИН:</label>
          <input type="text" id="username" v-model="username" required placeholder="Введите логин" />
        </div>
        <div class="form-group">
          <label for="password">ПАРОЛЬ:</label>
          <input type="password" id="password" v-model="password" required placeholder="Введите пароль" />
        </div>
        <button type="submit" class="login-button">Войти</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <button class="registration-button" @click="goToRegister">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();

const handleLogin = () => {
  // Проверка логина и пароля
  if (username.value === 'adm' && password.value === '123') {
    router.push('/main'); // Перенаправление на главную страницу
    errorMessage.value = ''; // Сброс сообщения об ошибке
  } else {
    errorMessage.value = 'Неправильный логин или пароль'; // Сообщение об ошибке
  }
};

// Функция для перехода на страницу регистрации
const goToRegister = () => {
  router.push('/registration'); // Перенаправление на страницу регистрации
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');



.login-container {
  
  display: flex;
  justify-content: center;
  align-items: center;
   /* Высота контейнера на весь экран */
}

.login-card {
  background-color: #fff5a0; /* Серый фон для окна ввода */
  padding: 50px;
  border-radius: 20px; /* Правильное закругление углов */
  box-shadow: 0 0 10px rgba(38, 38, 38, 0.5); /* Небольшая тень для эффекта */
  width: 700px; /* Ширина окна */
  text-align: center; /* Центрируем весь текст */
}
h1 {
  font-family: 'Inter', sans-serif;
  text-align: center;
  font-size: 55px;
  padding-top: 100px;
  padding-bottom: 50px;
}

h2 {
  font-family: 'Inter', sans-serif; 
  font-size: 50px;
  padding-bottom: 50px;
  color: black;
}

.form-group {
  margin-bottom: 30px;
}

label {
  font-family: 'Inter', sans-serif; 

  color: black;
  font-size: 30px;
  display: block; /* Исправлено на block */
  margin-bottom: 30px;
  font-weight: 700; /* Более выразительное значение */
}

input {
  font-family: 'Inter', sans-serif; 
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  font-family: 'Inter', sans-serif; 
  width: 100%;
  padding: 10px;
  background-color: #1b89ff; /* Цвет фона кнопки входа */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600; /* Полужирный текст для кнопки */
}

.login-button:hover {
  background-color: #0056b3; /* Цвет фона кнопки при наведении */
}

.registration-button {
  font-family: 'Inter', sans-serif; 
  width: 100%;
  padding: 10px;
  background-color: #24b247; /* Зеленый цвет для кнопки регистрации */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600; /* Полужирный текст для кнопки */
  margin-top: 15px; /* Отступ сверху для кнопки регистрации */
}

.registration-button:hover {
  background-color: #218838; /* Цвет фона кнопки регистрации при наведении */
}

.error {
  color: red; /* Цвет ошибки */
  margin-top: 15px; /* Отступ сверху для блока ошибки */
}
</style>
