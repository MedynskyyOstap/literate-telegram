import { store } from 'quasar/wrappers';
import Vuex, { createLogger } from 'vuex';
import { todos, Store } from './todos';
import { State } from './todos/state';

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const store = new Vuex.Store<State>({
    plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
    modules: {
      todos
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return store as Store;
});
