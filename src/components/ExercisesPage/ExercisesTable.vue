<template>
    <div>
      <h2>Упражнения</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название упражнения</th>
            <th>Количество повторений</th>
            <th>Примечания</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exercise in exercises" :key="exercise.id">
            <td>{{ exercise.id }}</td>
            <td>{{ exercise.name }}</td>
            <td>{{ exercise.repetitions }}</td>
            <td>{{ exercise.notes }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="goBack">Назад</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const exercises = ref([
      { id: 1, name: 'Бег', repetitions: 10, notes: 'На улице' },
      { id: 2, name: 'Плавание', repetitions: 5, notes: 'В бассейне' },
      // Добавьте другие упражнения по мере необходимости
  ]);
  
  const goBack = () => {
      router.push('/main'); // Переход на главную страницу
  };
  </script>
  
  <style scoped>
  /* Ваши стили для компонента */
  table {
      width: 100%;
      border-collapse: collapse;
  }
  
  th, td {
      padding: 8px;
      border: 1px solid #ddd;
      text-align: left;
  }
  
  th {
      background-color: #f2f2f2;
  }
  </style>
  