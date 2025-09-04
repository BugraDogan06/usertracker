<template>
  <div
    class="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center overflow-hidden"
  >
    <h1 class="text-6xl font-extrabold mb-4 text-center z-10 animate-fadeIn">
      Buğra Doğan
    </h1>
    <p
      class="text-lg text-gray-300 mb-12 z-10 text-center max-w-xl animate-fadeIn delay-200"
    >
      Kullanıcı Detay İzleme Platformu Projesi
    </p>
    <router-link
      :to="{ name: 'UserList' }"
      class="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg text-xl font-semibold hover:bg-gray-400 transition transform hover:scale-105 z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        class="w-6 h-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      Kullanıcıları Gör
    </router-link>
    <p
      class="absolute bottom-0 left-0 right-0 text-gray-500 p-4 text-sm opacity-70 overflow-hidden whitespace-pre-wrap z-10"
    >
      © 2025 Buğra Doğan. Tüm hakları saklıdır.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
html,
body {
  overflow: hidden;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}
</style>
