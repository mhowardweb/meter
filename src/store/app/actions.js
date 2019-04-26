export function saveReadingAction({ commit }, data) {
  commit('saveReading', data);
}

export function saveSettingsAction({ commit }, data) {
  commit('saveSettings', data);
}

export function loadDataAction({ commit }, data) {
  commit('loadData', data);
}
