import madlibs from "./data.js";

export const state = () => ({
  madlibs: madlibs,
  index: 0,
});
export const mutations = {
  SET_NEXT(state, next) {
    state.index = next;
  },
};
export const actions = {
  nextMadlib({ commit }) {
    let nextind = Math.floor(Math.random() * Math.floor(madlibs.length));
    commit("SET_NEXT", { nextind });
  },
  madlib: function () {
    return this.madlibs[this.index];
  },
};
