<template>
  <Page>
    <h2>{{ config.name }}</h2>
    <Card>
      <nuxt-link class="btn btn-success" :to="`/${config.crudName}/form`">
        Добавить {{ config.singleName }}
      </nuxt-link>
      <IcwtTable
        :columns="columns"
        :actions="actions"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </Card>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { columns, actions, config } from './setup'

export default {
  name: 'ProductsPage',
  middleware: 'auth',
  components: {
    IcwtTable: () => import('@/components/IcwtTable'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
  },
  data: () => ({
    columns,
    actions,
    config
  }),
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`
    })
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`
    }),
    handleEdit({ id }) {
      this.$router.push(`/${config.crudName}/form/${id}`)
    },
    async handleDelete({ id }) {
      await this.deleteItem(id)
      this.fetchItems()
    }
  },
  mounted() {
    this.fetchItems()
  }
}
</script>
