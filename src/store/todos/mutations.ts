import { MutationTree } from 'vuex';
import { State } from './state';
import { MutationTypes } from './types';
import { Database } from '../../api/models';

export type Mutations<S = State> = {
  [MutationTypes.setData](state: S, payload: Database[]): void;
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.setData] (state: State, payload: [Database]) {
    state.results = payload;
  }
};

export default mutations;
