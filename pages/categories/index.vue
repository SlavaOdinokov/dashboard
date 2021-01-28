<template>
  <Page :title="config.name">
    <nuxt-link class="btn btn-success" :to="`/${config.crudName}/form`">
      Добавить {{ config.singleName }}
    </nuxt-link>
    <TablePageWrapper>
      <IcwtTable
        :columns="columns"
        :actions="actions"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </TablePageWrapper>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { columns, actions, config } from './setup'

export default {
  name: config.pageName,
  components: {
    IcwtTable: () => import('@/components/IcwtTable'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
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
