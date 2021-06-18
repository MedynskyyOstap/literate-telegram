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
import { Database, Meta } from 'src/api/models';
// import CompositionComponent from 'components/CompositionComponent.vue';
import { defineComponent, onMounted, ref, inject, readonly } from '@vue/composition-api';
import store from '../store/index';
import { ActionTypes, MutationTypes } from '../store/todos/types';
import { databaseAPI, pageAPI, blockAPI, userAPI } from '../api/api';


export default defineComponent({
  name: 'PageIndex',
  // components: { CompositionComponent },
  setup() {    
    onMounted(async() => {
      const database = await databaseAPI.getListDatabases();
      console.log(database)
    })
    return { todos:[] };
  }
});
</script>
