<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <Card>
          <CrudForm
            v-if="model"
            :form-schema="schema"
            :form-model="model"
            :title="`${config.formTitle}`"
            @on-submit="onFormSubmit"
          />
        </Card>
        <p class="text-danger">{{ error }}</p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
// Store
import { mapActions, mapGetters } from 'vuex'
// Setups
import { schema, defaultForm } from './fields'
import { config } from '../setup'
// Mixins
import { relationsMixin } from '@/mixins/relation.mixin'

export default {
  name: config.formName,
  mixins: [relationsMixin],
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
  },
  data: () => ({
    schema,
    config,
    model: null
  }),
  computed: {
    ...mapGetters({
      item: `${config.crudName}/item`,
      error: `${config.crudName}/itemError`,
      products: `products/items`
     }),
    isUpdating: ({ $route: { params: { id } } }) => id !== undefined
  },
  methods: {
    ...mapActions({
      createItem: `${config.crudName}/create`,
      fetchItem: `${config.crudName}/fetchOne`,
      updateItem: `${config.crudName}/update`,
      fetchProducts: `products/fetchAll`
    }),
    setModel() {
      this.model = { ...defaultForm }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        products: this.model.products.map(product => product._id)
      }

      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel
      })

      this.$router.back()
    },
    async onItemCreate() {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        this.onItemUpdate()
        return
      }

      this.onItemCreate()
    }
  },
  async mounted() {
    await this.fetchProducts()
    this.setFields({ fieldKey: 'products', values: this.products })

    if (this.isUpdating) {
      await this.fetchItem(this.$route.params.id)
      this.model = { ...this.item }
      return
    }

    this.setModel()
  }
}
</script>
