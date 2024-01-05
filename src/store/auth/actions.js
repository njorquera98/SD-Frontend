import { api } from 'boot/axios'

export const doLogin = async ({ commit, dispatch }, payload) => {
  await api.post('http://localhost:3000/auth/login', payload).then(response => {
    const token = response.data
    commit('setToken', token)
    api.defaults.headers.common.Authorization = 'JWT ' + token.access
    dispatch('getMe', token)
  })
}


export const signOut = ({ commit }) => {
  api.defaults.headers.common.Authorization = ''
  commit('removeToken')
}

export const getMe = async ({ commit }, token) => {
  await api.get('http://localhost:3000/auth/profile', token.access).then(response => {
    commit('setMe', response.data)
  })
}

export const init = async ({ commit, dispatch }) => {
  const token = localStorage.getItem('token')
  if (token) {
    await commit('setToken', JSON.parse(token))
    api.defaults.headers.common.Authorization = 'JWT ' + JSON.parse(token).access
    dispatch('getMe', JSON.parse(token))
  } else {
    commit('removeToken')
  }
}