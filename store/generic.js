import GenericService from '@/services/generic.service'

const crudStore = ({ name, url }) => {
  const genericService = new GenericService({
    name,
    url
  })

  return {
    state: () => ({
      item: {},
      items: [],
      itemError: null
    }),
    actions: {
      async fetchAll({ commit }) {
        try {
          const items = await genericService.fetchAll()
          commit('fetchItemsSuccess', items)
        } catch (err) {
          commit('fetchItemsFail', {
            errType: `${name} fetchAll failed`,
            err
          })
        }
      },
      async fetchOne({ commit }, id) {
        try {
          const item = await genericService.fetchOne(id)
          commit('fetchItemSuccess', item)
        } catch (err) {
          commit('fetchItemFail', {
            errType: `${name} fetchOne failed`,
            err
          })
        }
      },
      async create({ commit }, payload) {
        try {
          const item = await genericService.create(payload)
          commit('createSuccess', item)
        } catch (err) {
          commit('createFail', {
            errType: `${name} create failed`,
            err
          })
        }
      },
      async update({ commit }, { payload, id }) {
        try {
          const item = await genericService.update(id, payload)
          commit('updateSuccess', item)
        } catch (err) {
          commit('updateFail', {
            errType: `${name} update failed`,
            err
          })
        }
      },
      async delete({ commit }, id) {
        try {
          const item = await genericService.delete(id)
          commit('deleteSuccess', item)
        } catch (err) {
          commit('deleteFail', {
            errType: `${name} delete failed`,
            err
          })
        }
      }
    },
    mutations: {
      updateSuccess(state, item) {
        state.item = item
      },
      updateFail(state, err) {
        state.itemError = err
      },

      createSuccess(state, item) {
        state.item = item
      },
      createFail(state, err) {
        state.itemError = err
      },

      fetchItemSuccess(state, item) {
        state.item = item
      },
      fetchItemFail(state, err) {
        state.itemError = err
      },

      fetchItemsSuccess(state, items) {
        state.items = items
      },
      fetchItemsFail(state, err) {
        state.itemError = err
      },

      deleteSuccess() {},
      deleteFail(state, err) {
        state.itemError = err
      },
    },
    getters: {
      item: (state) => state.item,
      items: (state) => state.items,
      itemError: (state) => state.itemError
    }
  }
}

export default crudStore
