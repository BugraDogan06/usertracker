<template>
  <div class="flex bg-gray-50 min-h-screen relative">
    <!-- Hamburger Menü -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded"
    >
      ☰
    </button>

    <!-- Sidebar -->
    <aside
      :class="{
        'translate-x-0': sidebarOpen,
        '-translate-x-full lg:translate-x-0': !sidebarOpen,
      }"
      class="fixed top-0 left-0 h-screen flex flex-col justify-between bg-gray-100 border-r border-gray-300 w-64 p-2 transition-transform duration-300 z-40"
    >
      <div class="flex flex-col h-full">
        <!-- User Info -->
        <div class="mb-12 pb-4 border-b border-gray-300 flex-shrink-0">
          <div class="flex items-center gap-4">
            <img
              :src="selectedUser.avatarUrl"
              alt="Image"
              width="70"
              class="rounded-full"
            />
            <div class="flex-1">
              <h3 class="text-base font-semibold text-gray-800">
                {{ selectedUser?.name }}
              </h3>
              <p class="text-sm text-gray-500">{{ selectedUser?.email }}</p>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="flex flex-col gap-4 font-poppins flex-1 overflow-auto">
          <div
            class="flex items-center gap-3 py-2 px-4 rounded cursor-pointer"
            :class="
              activeTab === 'todos'
                ? 'text-purple-600 bg-purple-100'
                : 'hover:bg-purple-100 hover:text-purple-600'
            "
            @click="activeTab = 'todos'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M13 5h8" />
              <path d="M13 9h5" />
              <path d="M13 15h8" />
              <path d="M13 19h5" />
              <path
                d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
              />
              <path
                d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
              />
            </svg>
            <span>Todos</span>
          </div>

          <div
            class="flex items-center gap-3 py-2 px-4 rounded cursor-pointer"
            :class="
              activeTab === 'albums'
                ? 'text-purple-600 bg-purple-100'
                : 'hover:bg-purple-100 hover:text-purple-600'
            "
            @click="activeTab = 'albums'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
              />
              <path
                d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1"
              />
              <path d="M17 7h.01" />
              <path
                d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644"
              />
              <path
                d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644"
              />
            </svg>
            <span>Albums</span>
          </div>

          <div
            class="flex items-center gap-3 py-2 px-4 rounded cursor-pointer"
            :class="
              activeTab === 'posts'
                ? 'text-purple-600 bg-purple-100'
                : 'hover:bg-purple-100 hover:text-purple-600'
            "
            @click="activeTab = 'posts'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"
              />
              <path d="M10 16h6" />
              <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 8h3" />
              <path d="M4 12h3" />
              <path d="M4 16h3" />
            </svg>
            <span>Posts</span>
          </div>
        </nav>

        <!-- Logo -->
        <div class="flex flex-col items-center mt-auto mb-0 flex-shrink-0">
          <div class="w-full border border-gray-300 mb-4"></div>
          <span class="text-xl font-bold text-gray-700 flex items-center gap-2">
            <img src="/logo.png" alt="Logo" class="w-8 h-8" />
            N2Mobil
          </span>
        </div>
      </div>
    </aside>

    <main class="flex-1 p-8 mt-8 lg:ml-64 font-poppins overflow-auto">
      <!-- Go Home Butonu -->
      <div
        class="flex items-center gap-2 mb-6 text-black text-lg font-semibold cursor-pointer hover:underline sticky top-0 bg-gray-50 z-10 py-2"
        @click="goHome"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
          <path d="M8 12l4 4" />
          <path d="M8 12h8" />
          <path d="M12 8l-4 4" />
        </svg>

        Go Home
      </div>

      <!-- TODOS -->
      <div v-if="activeTab === 'todos'">
        <ul class="space-y-4">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="flex items-start gap-3 text-base text-gray-800"
          >
            <input
              type="checkbox"
              class="mt-1 w-5 h-5 accent-purple-600"
              :checked="todo.completed"
            />
            <span class="leading-relaxed">{{ todo.title }}</span>
          </li>
        </ul>
      </div>

      <!-- ALBUMS -->
      <div
        v-else-if="activeTab === 'albums'"
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-20"
      >
        <div
          v-for="(album, index) in albums"
          :key="index"
          class="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col aspect-square cursor-pointer"
          @click="openAlbumModal(album)"
        >
          <!-- Kapak: 4 fotoğraf -->
          <div class="grid grid-cols-2 grid-rows-2 gap-[2px] flex-1">
            <img
              v-for="(photo, i) in album.photos.slice(0, 4)"
              :key="i"
              :src="photo"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-[2px] flex flex-col justify-end">
            <h2 class="text-sm font-semibold text-gray-800">
              {{ album.title }}
            </h2>
            <p class="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <!-- POSTS -->
      <div v-else-if="activeTab === 'posts'" class="space-y-6">
        <div v-for="(post, index) in posts" :key="index" class="border-b pb-6">
          <h2 class="text-lg font-semibold mb-2">{{ post?.title }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ post?.body }}</p>
          <div
            class="flex justify-end items-center text-black cursor-pointer hover:underline"
            @click="openDetail(post)"
          >
            <span class="mr-2">See More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
              <path d="M16 12l-4 -4" />
              <path d="M16 12h-8" />
              <path d="M12 16l4 -4" />
            </svg>
          </div>
        </div>
      </div>
    </main>

    <!-- Post Modal -->
    <div
      v-if="selectedPost"
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
      @keydown.esc="selectedPost = null"
      tabindex="0"
    >
      <div
        class="relative w-[1024px] max-w-full h-[609px] bg-white rounded-[24px] p-[36px_32px_36px_32px] flex gap-[10px] shadow-lg"
      >
        <div class="flex-1 overflow-auto pr-6">
          <h2 class="text-2xl font-bold mb-4">{{ selectedPost.title }}</h2>
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">
            {{ selectedPost.body }}
          </p>
        </div>
        <div class="w-1/3 bg-gray-100 p-4 rounded-lg overflow-auto">
          <h3 class="font-semibold mb-4">Comments</h3>
          <ul class="space-y-4">
            <li
              v-for="(comment, i) in comments"
              :key="i"
              class="flex gap-3 items-start"
            >
              <div
                class="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold flex-shrink-0"
              >
                <img
                  :src="`https://randomuser.me/api/portraits/men/${
                    (comment.id % 99) + 20
                  }.jpg`"
                  alt="Image"
                  width="100"
                  class="rounded-full"
                />
              </div>
              <div class="flex-1">
                <div class="font-semibold text-sm">{{ comment.email }}</div>
                <div class="border-b border-gray-300 my-1"></div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  {{ comment.body }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
          @click="selectedPost = null"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Album Modal -->
    <div
      v-if="selectedAlbum"
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
      @click.self="selectedAlbum = null"
      @keydown.esc="selectedAlbum = null"
      tabindex="0"
    >
      <div
        class="relative w-[800px] max-w-full bg-white rounded-lg p-6 flex flex-col gap-4 overflow-auto"
      >
        <h2 class="text-2xl font-bold mb-4">{{ selectedAlbum.title }}</h2>
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(photo, i) in selectedAlbum.photos.slice(0, 8)"
            :key="i"
            class="flex flex-col items-center"
          >
            <img
              :src="photo"
              class="w-full aspect-square object-cover rounded"
            />
            <p class="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
          @click="selectedAlbum = null"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { getPosts, getUsers, getTodos, getComments } from "../services/api";
import { useStore } from "vuex";

const userStore = useStore();
const route = useRoute();
const router = useRouter();
const user = ref<any>();
const sidebarOpen = ref(false);
const activeTab = ref<"todos" | "posts" | "albums">("todos");

const todos = ref();
const comments = ref();
const selectedPost = ref<{ title: string; body: string } | null>(null);
const posts = ref();
const albums = ref<any[]>([]);
const apiUsers = ref<{ id: number; name: string }[]>([]);
const selectedAlbum = ref<any | null>(null);
const selectedUser = computed(() => userStore.getters.getSelectedUser);
console.log(selectedUser.value);

const goHome = () => router.push("/users");

const openDetail = async (post: {
  id: number;
  title: string;
  body: string;
  userId?: number;
}) => {
  selectedPost.value = post;
  if (apiUsers.value.length === 0) return;
  const resComments = await getComments(post.id);
  comments.value = resComments.data;
};

const openAlbumModal = (album: any) => {
  selectedAlbum.value = album;
};
const softwareImages = [
  "https://picsum.photos/200/200?random=1",
  "https://picsum.photos/200/200?random=2",
  "https://picsum.photos/200/200?random=3",
  "https://picsum.photos/200/200?random=4",
  "https://picsum.photos/200/200?random=5",
  "https://picsum.photos/200/200?random=6",
  "https://picsum.photos/200/200?random=7",
  "https://picsum.photos/200/200?random=8",
  "https://picsum.photos/200/200?random=9",
  "https://picsum.photos/200/200?random=10",
  "https://picsum.photos/200/200?random=11",
  "https://picsum.photos/200/200?random=12",
];

const generateAlbums = () => {
  const fakeAlbums = [];
  for (let i = 0; i < 9; i++) {
    const shuffled = [...softwareImages].sort(() => 0.5 - Math.random());
    fakeAlbums.push({
      id: i + 1,
      title: `Albüm ${i + 1}`,
      photos: shuffled.slice(0, 8),
    });
  }
  return fakeAlbums;
};

onMounted(async () => {
  const idParam = route?.params?.id;
  const userId = Array.isArray(idParam) ? undefined : Number(idParam);
  const res = await getUsers(userId);
  user.value = res;
  userStore.dispatch("selectUser", user.value);
  apiUsers.value = Array.isArray(res) ? res : [res];
  const resPost = await getPosts(userId);
  posts.value = resPost.data;
  const resTodos = await getTodos(userId);
  todos.value = resTodos.data;

  albums.value = generateAlbums();
});
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
::-webkit-scrollbar-track {
  background: transparent;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}
</style>
