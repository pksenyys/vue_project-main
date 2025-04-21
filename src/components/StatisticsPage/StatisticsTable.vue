<template>
    <div>
      <h2>Статистика</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя упражнения</th>
            <th>Количество повторений</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stat in statistics" :key="stat.id">
            <td>{{ stat.id }}</td>
            <td>{{ stat.exerciseName }}</td>
            <td>{{ stat.repetitions }}</td>
            <td>{{ stat.date }}</td>
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
  const statistics = ref([
      { id: 1, exerciseName: 'Приседания', repetitions: 20, date: '2023-10-01' },
      { id: 2, exerciseName: 'Отжимания', repetitions: 15, date: '2023-10-02' },
      // Добавьте дополнительные записи статистики по мере необходимости
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
  