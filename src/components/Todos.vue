<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'all'">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="checkCompleted(index)" :value = "todo.completed">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <p v-else>{{ todo.title }}</p>
          </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>

    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'active'">
      <div v-if="todo.completed === false">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="checkCompleted(index)">
          <p>{{ todo.title }}</p>
          </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
      </div>
    </div>

    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'completed'">
      <div class="" v-if="todo.completed === true">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="checkCompleted(index)" :value = "true">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
      </div>
    </div>
    <button class="button is-danger is-medium" @click="clearCompleted()">clear</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['removeTodo', 'checkCompleted', 'clearCompleted'])
  }
}
</script>
