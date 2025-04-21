<template>
  <div class="account-container">
    <div class="account-card">
      <h2>Ваш аккаунт</h2>
      <div class="profile-picture">
        <img :src="userData.profilePicture" alt="Profile Picture" />
        <input type="file" accept="image/*" @change="onFileChange" />
      </div>
      <form @submit.prevent="updateUserData">
        <div class="form-group">
          <label for="firstName">Имя:</label>
          <input type="text" id="firstName" v-model="userData.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия:</label>
          <input type="text" id="lastName" v-model="userData.lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userData.email" required />
        </div>
        <div class="form-group">
          <label for="registrationDate">Дата регистрации:</label>
          <input type="text" id="registrationDate" v-model="userData.registrationDate" disabled />
        </div>
        <button type="submit" class="update-button">Обновить данные</button>
      </form>
      <button class="delete-button" @click="deleteAccount">Удалить аккаунт</button>
      <button class="main-button" @click="goToMain">На главную</button>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userData = ref({
  firstName: 'Иван',
  lastName: 'Иванов',
  email: 'ivan@example.com',
  registrationDate: '2023-10-10',
  profilePicture: 'default-profile-pic.png' // Путь к изображению по умолчанию
});

const message = ref('');

const updateUserData = () => {
  // Логика для обновления данных пользователя
  message.value = 'Данные успешно обновлены!';
};

const onFileChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      userData.value.profilePicture = e.target.result as string; // Установка загруженного изображения
    };
    
    reader.readAsDataURL(file);
  }
};

const deleteAccount = () => {
  // Логика для удаления аккаунта
  message.value = 'Аккаунт успешно удалён!';
};

const goToMain = () => {
  // Переход на главную страницу
  router.push('/main');
};
</script>

<style scoped>
.account-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Высота контейнера на весь экран */
  background-color: #f8f9fa; /* Светлый фон для всего тела */
}

.account-card {
  background-color: #ffffff; /* Белый фон для карточки аккаунта */
  padding: 40px;
  border-radius: 20px; /* Правильное закругление углов */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Лёгкая тень для эффекта */
  width: 400px; /* Ширина карточки */
  text-align: center; /* Центрируем текст */
}

.profile-picture {
  margin-bottom: 20px;
}

.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Круглая аватарка */
  object-fit: cover;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block; /* Отображение меток блоками */
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.update-button {
  width: 100%;
  padding: 10px;
  background-color: #28a745; /* Зеленый цвет для кнопки обновления */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600; /* Полужирный текст для кнопки */
}

.update-button:hover {
  background-color: #218838; /* Цвет фона кнопки обновления при наведении */
}

.delete-button {
  width: 100%;
  padding: 10px;
  background-color: #dc3545; /* Красный цвет для кнопки удаления */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600; /* Полужирный текст для кнопки */
  margin-top: 10px; /* Отступ сверху для кнопки удаления */
}

.delete-button:hover {
  background-color: #c82333; /* Цвет фона кнопки удаления при наведении */
}

.main-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff; /* Синий цвет для кнопки "На главную" */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600; /* Полужирный текст для кнопки */
  margin-top: 10px; /* Отступ сверху для кнопки "На главную" */
}

.main-button:hover {
  background-color: #0056b3; /* Цвет фона кнопки "На главную" при наведении */
}

.message {
  margin-top: 15px;
  color: green; /* Цвет сообщения */
}
</style>
