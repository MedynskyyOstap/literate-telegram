import { ActionTree, ActionContext } from 'vuex';
import { ActionTypes, MutationTypes } from './types';
import { Mutations } from './mutations';
import { State } from './state';

export type ActionAugments = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ):ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.setData](
    {commit}: ActionAugments,
    payload: []
  ): void;
}

const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.setData]({commit}, payload: []) {
    commit(MutationTypes.setData, payload)
  }
};

export default actions;
