import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import '@fortawesome/fontawesome-free/css/all.css'

const db = firebase.database()
const usersRef = db.ref('/users')
const provider = new firebase.auth.GoogleAuthProvider()
const fbprovider = new firebase.auth.FacebookAuthProvider();

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      users: [],
      isLoaded: false
    },
    getters: {
      users: state => state.users,
      user: state => state.user,
      isLoaded: state => state.isLoaded
    },
    mutations: {
      setCredential(state, { user }) {
        state.user = user
      },
      setIsLoaded(state, next) {
        state.isLoaded = !!next
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL({ commit }, { user }) {
        if (!user) return
        await usersRef
          .child(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
          .set({
            name: user.displayName,
            email: user.email,
            icon: user.photoURL
          })
        console.log(user)
        commit('setCredential', { user })
      },
      async INIT_SINGLE({ commit }, { id }) {
        const snapshot = await postsRef.child(id).once('value')
        commit('savePost', { post: snapshot.val() })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      callAuth() {
        firebase.auth().signInWithRedirect(provider)
        firebase.auth().signInWithRedirect(fbprovider)
      },
      signOut() {
        firebase.auth().signOut()
      },
      loadComplete({ commit }) {
        commit('setIsLoaded', true)
      }
    }
  })
}

export default createStore
