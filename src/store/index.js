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
      },
      setIsLoaded(state, next) {
        state.isLoaded = !!next
      },
      setPlans(state, { plans }) {
        state.plans = plans
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL({ commit }, { user }) {
        if (!user) return
        await usersRef
          .child(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
          .set({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            icon: user.photoURL
          })
        commit('setCredential', { user })
      },
      async SET_USER({ commit }, { user }) {
        if (!user) return
        const usersRef = await db.ref(`/users/${user.uid}`).once('value')
        commit('setCredential', { user: usersRef.val()})
      },
      async INIT_SINGLE({ commit }, { id }) {
        const snapshot = await postsRef.child(id).once('value')
        commit('savePost', { post: snapshot.val() })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      async INIT_PLANS({ commit }, { user }) {
        const snapshot = await db.ref(`/plans/${user.uid}`).once('value')
        firebaseAction(async ({ bindFirebaseRef }) => {
          await bindFirebaseRef('plans', plansRef)
        })
        commit('setPlans', { plans: snapshot.val() })
      },
      ADD_PLAN: firebaseAction(async (ctx, { user, plan }) => {
        const planRef = db.ref(`plans/${user.id}`)
        await planRef.push(plan)
      }),
      callAuth() {
        firebase.auth().signInWithPopup(provider)
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
