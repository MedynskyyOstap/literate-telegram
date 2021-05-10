import { GetterTree } from 'vuex';
import { State } from './state';

export type Getters = {
  getTodos(state: State): [];
}

const getters: GetterTree<State, State> & Getters = {
  getTodos: state => {
    return state.todos;
  }
};

export default getters;
