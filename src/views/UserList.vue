<template>
  <div class="flex bg-gray-50 min-h-screen">
    <!-- Hamburger  -->
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
      class="fixed top-0 left-0 h-screen flex flex-col justify-between bg-gray-100 border-r border-gray-300 w-64 p-2 transition-transform duration-300"
    >
      <!-- Navbar Item -->
      <nav class="flex flex-col gap-4 px-0">
        <div
          class="flex items-center gap-3 py-2 px-4 rounded cursor-pointer text-gray-600 bg-purple-100"
          style="width: 100%; height: 40px; justify-content: flex-start"
        >
          <!-- Users İcon -->
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
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <span>Users</span>
        </div>
      </nav>

      <!-- alt Logo -->
      <div class="flex flex-col items-center mt-auto mb-0">
        <div class="w-[228px] border-b border-gray-300 mb-4"></div>
        <span
          class="flex items-center justify-center gap-2 text-[#485B69] font-bold text-2xl"
        >
          <img src="/logo.png" alt="Logo" class="w-8 h-8" /> N2Mobil
        </span>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 ml-0 lg:ml-64 overflow-auto">
      <h2 class="mb-2 font-semibold text-lg">ALL USERS</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min"
      >
        <div
          v-for="user in users"
          :key="user.id"
          @click="goToDetail(user)"
          class="bg-white border rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col cursor-pointer"
          style="height: 370px"
        >
          <div class="flex items-center gap-4">
            <!-- Avatar -->
            <div
              class="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center text-2xl font-bold text-white overflow-hidden"
            >
              <img
                v-if="user.avatarUrl"
                :src="user.avatarUrl"
                alt="avatar"
                width="100"
                class="rounded-full"
              />
              <span v-else>{{ user.initials }}</span>
            </div>

            <div class="flex flex-col justify-center space-y-1 font-poppins">
              <h3 class="text-black text-lg font-medium">{{ user?.name }}</h3>
              <p class="text-gray-500 text-sm">{{ user?.email }}</p>
              <p class="text-gray-500 text-sm">{{ user?.phone }}</p>
            </div>
          </div>

          <div class="mt-auto space-y-4 font-poppins text-sm">
            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                  />
                </svg>
                <span class="font-semibold text-black text-base"
                  >Location:</span
                >
              </div>
              <span class="ml-6 text-gray-600">{{ user.address.street }}</span>
            </div>

            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 21l18 0" />
                  <path d="M5 21v-14l8 -4v18" />
                  <path d="M19 21v-10l-6 -4" />
                  <path d="M9 9l0 .01" />
                  <path d="M9 12l0 .01" />
                  <path d="M9 15l0 .01" />
                  <path d="M9 18l0 .01" />
                </svg>
                <span class="font-semibold text-black text-base">Company:</span>
              </div>
              <span class="ml-6 text-gray-600">{{ user.company.name }}</span>
            </div>

            <div>
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 0 -9 9" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h8.4" />
                    <path d="M11.578 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
                    <path d="M18 21v-7m3 3l-3 -3l-3 3" />
                  </svg>
                  <span class="font-semibold text-black text-base"
                    >Website:</span
                  >
                </div>
                <span class="ml-6 text-gray-600 block">{{ user.website }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "SidebarWithCards",
  setup() {
    const router = useRouter();
    const store = useStore();
    const sidebarOpen = ref(false);

    const users = computed(() => store.state.users);

    function goToDetail(user: any) {
      store.dispatch("selectUser", user);
      router.push(`/user/${user.id}/`);
    }

    onMounted(() => {
      store.dispatch("fetchUsers");
    });

    return { users, goToDetail, sidebarOpen };
  },
});
</script>

<style scoped>
nav div:hover {
  background-color: #e9d8fd;
  color: #6b46c1;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
