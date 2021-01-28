<template>
  <div class="container mx-auto px-6 py-8">
    <h3 class="text-gray-800 text-2xl font-medium mb-6">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
