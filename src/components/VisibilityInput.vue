<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{all}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ({{active}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{completed}})</span>
      </b-radio-button>
    </b-field>
    &nbsp;&nbsp;&nbsp;
    <button class="button is-warning is-small" @click="clearCompleted()">Clear</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { store } from '@/store'

export default {
  computed: {
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    },
    all () {
      return this.todos.length
    },
    active () {
      return this.todos.filter((todo) => todo.completed === false).length
    },
    completed () {
      return this.todos.filter((todo) => todo.completed === true).length
    }
  },
  methods: {
    ...mapActions(['clearCompleted'])
  }
}
</script>
