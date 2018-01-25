import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHECK_COMPLETED (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    },
    CLEAR_COMPLETED (state) {
      for (var i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    removeTodo ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    checkCompleted ({commit}, index) {
      commit('CHECK_COMPLETED', index)
    },
    clearCompleted ({commit}) {
      commit('CLEAR_COMPLETED')
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
