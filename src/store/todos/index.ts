import { Module } from 'vuex';
import { state, State } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

export type Store = Omit<VuexStore<State>,
'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?:DispatchOptions
  ): ReturnType<Actions[K]>;
}

export const todos: Module<State, State> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};