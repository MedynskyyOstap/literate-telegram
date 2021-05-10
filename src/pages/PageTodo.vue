<template>
  <q-page class="row items-center justify-evenly">
    <p>Todo Page</p>
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'src/store/todos/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, onMounted, ref, inject } from '@vue/composition-api';
import axios, { AxiosResponse } from 'axios';
import store from '../store/index';
import { ActionTypes, MutationTypes } from '../store/todos/types';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    onMounted(async() => {
      try {
        const data: void | AxiosResponse<[]> = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .then((res: AxiosResponse):[] => res.data.splice(0,10))
          .then((result: []) => {
            // store.commit()
          // todos.value = [...result]
          })
      } catch (error) {
        console.log(error)
      }
      ;
    })
    return { todos:[] };
  }
});
</script>
