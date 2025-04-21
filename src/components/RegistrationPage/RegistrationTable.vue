<template>
    <div class="registration-container">
      <div class="registration-card">
        <h2>Регистрация</h2>
        <form @submit.prevent="handleRegistration">
          <div class="form-group">
            <label for="firstName">Имя:</label>
            <input type="text" id="firstName" v-model="userData.firstName" required placeholder="Введите имя" />
          </div>
          <div class="form-group">
            <label for="lastName">Фамилия:</label>
            <input type="text" id="lastName" v-model="userData.lastName" required placeholder="Введите фамилию" />
          </div>
          <div class="form-group">
            <label for="age">Возраст:</label>
            <input type="number" id="age" v-model="userData.age" required placeholder="Введите возраст" min="1" />
          </div>
          <div class="form-group">
            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" v-model="userData.phone" required placeholder="Введите телефон" />
          </div>
          <button type="submit" class="register-button">Зарегистрироваться</button>
        </form>
  
        <div v-if="message" class="message">{{ message }}</div>
        
        <button v-if="isRegistered" class="main-button" @click="goToMain">На главную</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Создание объекта данных пользователя
  const userData = ref({
    firstName: '',
    lastName: '',
    age: null,
    phone: ''
  });
  
  const message = ref('');
  const isRegistered = ref(false);
  const router = useRouter();
  
  const handleRegistration = () => {
    // Валидация данных
    if (!userData.value.firstName || !userData.value.lastName || !userData.value.age || !userData.value.phone) {
      message.value = 'Пожалуйста, заполните все поля!';
      return;
    }
  
    // Проверка возраста
    if (userData.value.age <= 0) {
      message.value = 'Возраст должен быть больше нуля!';
      return;
    }
  
    // Проверка формата телефона (пример: длина минимальная 10 символов)
    if (userData.value.phone.length < 10) {
      message.value = 'Неверный формат телефона!';
      return;
    }
  
    // Успешная регистрация
    message.value = `Регистрация успешна  ${userData.value.firstName} ${userData.value.lastName}!`;
    isRegistered.value = true; // Указываем, что регистрация прошла успешно
  
    // Сброс значений
    userData.value.firstName = '';
    userData.value.lastName = '';
    userData.value.age = null;
    userData.value.phone = '';
  };
  
  const goToMain = () => {
    // Переход на главную страницу
    router.push('/main');
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
  
 
  
  .registration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Высота контейнера на весь экран */
  }
  
  .registration-card {
    background-color: #494848; /* Белый фон для формы регистрации */
    padding: 40px;
    border-radius: 20px; /* Правильное закругление углов */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Лёгкая тень для эффекта */
    width: 400px; /* Ширина окна */
    text-align: center; /* Центрируем текст */
  }
  
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 600; /* Полужирный заголовок */
    padding: 10px;
    color: white;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-family: 'Inter', sans-serif;
    display: block; /* Отображение меток блоками */
    margin-bottom: 10px;
    font-weight: 500; /* Полужирный текст меток */
    color: white;
  }
  
  input {
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .register-button {
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 10px;
    background-color: #03721f; /* Зеленый цвет для кнопки регистрации */
    color: #fff; /* Цвет текста кнопки */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600; /* Полужирный текст для кнопки */
  }
  
  .register-button:hover {
    background-color: #218838; /* Цвет фона кнопки регистрации при наведении */
  }
  
  .message {
    font-family: 'Inter', sans-serif;
    margin-top: 15px;
    font-size: 15px;
    color: white; /* Цвет сообщения */
  }
  
  .main-button {
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 10px;
    background-color: #025ec1; /* Цвет фона кнопки "На главную" */
    color: #fff; /* Цвет текста кнопки */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600; /* Полужирный текст для кнопки */
    margin-top: 15px; /* Отступ сверху для кнопки */
  }
  
  .main-button:hover {
    background-color: #0056b3; /* Цвет фона кнопки "На главную" при наведении */
  }
  </style>
  