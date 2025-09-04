import { createStore } from "vuex";

export default createStore({
  state: {
    users: [] as any[],
    selectedUser: {}, // Kullanıcıları burada saklıyorum
  },
  getters: {
    getUsers: (state) => state.users,
    getSelectedUser: (state) => state.selectedUser, // getter ekledim
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const users = data.map((user: any, index: number) => {
          const avatarUrl = `https://randomuser.me/api/portraits/men/${
            user.id % 99
          }.jpg`;

          return {
            ...user,
            initials: user.name
              .split(" ")
              .map((n: string) => n[0])
              .join(""),
            avatarUrl,
          };
        });

        commit("setUsers", users);
      } catch (error) {
        console.error("Users fetch failed:", error);
      }
    },
    selectUser({ commit }, user) {
      commit("setSelectedUser", user);
    },
  },
  modules: {},
});
