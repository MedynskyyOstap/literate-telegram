import { MutationTree } from 'vuex';
import { State } from './state';
import { MutationTypes } from './types';
import { Todo } from './models';

export type Mutations<S = State> = {
  [MutationTypes.setData](state: S, payload: Todo[]): void;
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.setData] (state: State, payload: []) {
    state.todos = payload
  }
};

export default mutations;
