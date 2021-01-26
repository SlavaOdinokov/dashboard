<template>
  <div class="app">
    <IcwtNav :menu="menu" @onLogout="handleLogout" />
    <div class="content">
      <main>
        <Nuxt />
      </main>
      <IcwtFooter />
    </div>
  </div>
</template>

<script>
import menu from './setup'

export default {
  name: 'DefaultLayout',
  data: () => ({
    menu
  }),
  components: {
    IcwtNav: () => import('@/components/layouts/Nav'),
    IcwtFooter: () => import('@/components/layouts/Footer')
  },
  methods: {
    handleLogout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
}
main {
  height: 95%;
  background: $main-bg;
}
</style>
