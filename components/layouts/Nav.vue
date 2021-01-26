<template>
  <nav>
    <NavItem
      v-for="(item, key) in menu"
      :key="key"
      :to="item.to"
    >
      {{ item.name }}
    </NavItem>
    <button class="btn btn-dark" @click="$emit('onLogout')">Выйти</button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NavItem: () => import('@/components/NavItem')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';

nav {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15vw;
  padding: 1rem;
  box-shadow: $menu-shadow;
}
</style>
