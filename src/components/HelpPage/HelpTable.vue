<template>
  <div class="help-page">
    <h2>Справка</h2>
    
    <div v-if="!showTextContent" class="button-container">
      <button @click="goToAboutApp" class="help-button">О приложении</button>
      <button @click="goToUsage" class="help-button">Как использовать приложение</button>
      <button @click="goToExercisesSection" class="help-button">Упражнения</button>
      <button @click="goToProgressTracking" class="help-button">Отслеживание прогресса</button>
      <button @click="goToFeedback" class="help-button feedback-button">Обратная связь</button>
    </div>
    
    <!-- Контейнер для отображения текста -->
    <div v-if="showTextContent" class="text-container">
      <div class="text-content">{{ textContent }}</div>
      <button @click="goBackClean" class="back-button">Назад</button>
    </div>
  <div v-if="!showTextContent" >
    <!-- Кнопка для возврата на главную страницу, размещенная под контейнером -->
    <button @click="goToHome" class="help-button home-button">На главную</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Импортируем useRouter

const router = useRouter(); // Создаем экземпляр маршрутизатора

const showTextContent = ref(false); // Состояние для контроля отображения текста
const textContent = ref(''); // Содержимое текстового файла

const goBackClean = () => {
  showTextContent.value = false;
  textContent.value = ''; // Очищаем текст, когда возвращаемся назад
};

const goToHome = () => {
  router.push('/main'); // Переход на главную страницу
};

const goToAboutApp = async () => {
  showTextContent.value = true;
  textContent.value = await fetchText('src/assets/text/about.txt');
};

const goToUsage = async () => {
  showTextContent.value = true;
  textContent.value = await fetchText('/path/to/usage.txt');
};

const goToExercisesSection = async () => {
  showTextContent.value = true;
  textContent.value = await fetchText('/path/to/exercises.txt');
};

const goToProgressTracking = async () => {
  showTextContent.value = true;
  textContent.value = await fetchText('/path/to/progress.txt');
};

const goToFeedback = async () => {
  showTextContent.value = true;
  textContent.value = await fetchText('/path/to/feedback.txt');
};

// Функция для загрузки текста из файла
const fetchText = async (filePath) => {
  const response = await fetch(filePath);
  if (!response.ok) {
    return 'Ошибка загрузки файла.';
  }
  return await response.text();
};
</script>

<style scoped>
.help-page {
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.button-container {
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid #363636;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 20px;
}

.help-button {
  flex: 1 1 40%;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #7c7c7c;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.help-button:hover {
  background-color: #272727;
}

.feedback-button {
  margin-top: 20px;
}

.text-container {
  margin-top: 20px; /* Отступ сверху для текстового контейнера */
  padding: 20px; /* Внутренние отступы для текстового контейнера */
  border: 2px solid #363636; /* Рамка вокруг текстового контейнера */
  border-radius: 10px; /* Скругление углов текстового контейнера */
  background-color: #f9f9f9; /* Цвет фона текстового контейнера */
}

.text-content {
  white-space: pre-wrap; /* Сохранение пробелов и переносов в тексте */
  text-align: center; /* Центрирование текста */
  margin: 0 auto; /* Дополнительный центрирующий отступ */
}

.back-button {
  display: block;
  margin: auto;
  margin-top: 20px;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  background-color: #4c4c4c;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #949494;
}

/* Стили для кнопки "На главную" */
.home-button {
  
  display: block; /* Блок, чтобы занять всю ширину */
  margin:auto;
  background-color: #5a5a5a; /* Цвет фона */
  margin-top: 59px; /* Отступ сверху для кнопки "На главную" */
}

.home-button:hover {
  background-color: #3b3b3b; /* Цвет фона при наведении */
}
</style>
