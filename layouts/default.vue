<template>
  <div class="flex h-screen bg-gray-200">
    <IcwtNav :menu="menu" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <IcwtHeader @onLogout="handleLogout" />
      <main class="flex overflow-x-hidden overflow-y-auto bg-gray-200">
        <Nuxt />
      </main>
      <!-- <IcwtFooter /> -->
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
    IcwtNav: () => import('@/components/layouts/Navigation/Nav'),
    IcwtFooter: () => import('@/components/layouts/Footer'),
    IcwtHeader: () => import('@/components/layouts/Header')
  },
  methods: {
    handleLogout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
