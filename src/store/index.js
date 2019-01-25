import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const usersRef = db.ref('/users')
const plansRef = db.ref('/plans')
const provider = new firebase.auth.GoogleAuthProvider()
const fbprovider = new firebase.auth.FacebookAuthProvider();

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      users: [],
      plans: [],
      isLoaded: false
    },
    getters: {
      users: state => state.users,
      plans: state => state.plans,
      user: state => state.user,
      isAuthenticated: state => !!state.user,
      isLoaded: state => state.isLoaded
    },
    mutations: {
      setCredential(state, { user }) {
        state.user = user
        this.$router.push('/user')
      },
      setIsLoaded(state, next) {
        state.isLoaded = !!next
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL({ commit }, { user }) {
        if (!user) return
        try {
          await usersRef
            .child(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
            .set({
              name: user.displayName,
              email: user.email,
              icon: user.photoURL
            })
          commit('setCredential', { user })
        } catch (e) {
          if (e.code === 'auth/user-not-found') {
            console.error('User not found')
          }
        }
      },
      async INIT_SINGLE({ commit }, { id }) {
        const snapshot = await postsRef.child(id).once('value')
        commit('savePost', { post: snapshot.val() })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      INIT_PLANS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('plans', plansRef)
      }),
      ADD_PLAN: firebaseAction((ctx, { user }) => {
        db()
        .ref(`plans/${user.uid}`)
        .push({
          from: email,
          body
        })
      }),
      async callAuth({ commit }) {
        const user = await firebase.auth().signInWithPopup(provider).catch((e) => console.error(e))
        commit('setCredential', { user })
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
