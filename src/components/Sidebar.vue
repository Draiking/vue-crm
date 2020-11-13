<template>
  <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
    <li v-for="link in links" :key="link.url" :exact="link.exact">
      <router-link active-class="active" :to="link.url">
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      links: [
        { title: "Счет", url: "/", exact: true },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "/planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "/categories" },
      ],
    };
  },
};
</script>

<style >
.active {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>