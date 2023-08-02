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
import { useRouter } from 'vue-router';

const router = useRouter()
let activeItem = ref('')

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

onMounted(async () => {
  await router.isReady() 
  activeItem.value = router.currentRoute.value.fullPath.substring(1)
})

interface NavItem {
  name: string
  link: string
}

const changeActive = (newActive: string) => {
  activeItem.value = newActive
}
</script>
