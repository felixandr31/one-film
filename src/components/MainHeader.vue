<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li
          v-for="navItem in navItems"
          :key="navItem.link"
          class="nav-item"
        >
          <router-link
            :to="'' + navItem.link"
            class="nav-link"
            :class="{ active: navItem.link === activeItem }"
            @click="changeActive(navItem.link)"
            >{{ navItem.name }}
          </router-link>
        </li>
      </ul>
    </header>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
let activeItem = ref('search-series')
const ttt = import.meta.env.VITE_TVMAZE_BASE_URL
const navItems: NavItem[] = [
  {
    name: 'Search',
    link: 'search-series'
  },
  {
    name: 'My list',
    link: 'my-list'
  },
  {
    name: 'For tonight',
    link: 'serie-for-tonight'
  }
]

onMounted(() => {
  console.log('cci', ttt)
})

interface NavItem {
  name: string
  link: string
}

const changeActive = (newActive: string) => {
  activeItem.value = newActive
}
</script>

<style scoped></style>
