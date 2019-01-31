import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import '@fortawesome/fontawesome-free/css/all.css'

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
        try {
          const userDetails = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            icon: user.photoURL
          }
          await usersRef
            .child(user.uid)
            .set(userDetails)
          commit('setCredential', { user: userDetails })
          this.$router.push('/user')
        } catch (e) {
          if (e.code === 'auth/user-not-found') {
            console.error('User not found')
          }
        }
      },
      async SET_USER({ commit }, { user }) {
        if (!user) return
        const usersRef = await db.ref(`/users/${user.uid}`).once('value')
        commit('setCredential', { user: usersRef.val()})
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
        const planRef = db.ref(`plans/${user.uid}`)
        await planRef.push(plan)
      }),
      async callAuth({ dispatch }, { providerName }) {
        let res
        if (providerName === 'facebook') {
          fbprovider.addScope('user_birthday')
          res = await firebase.auth().signInWithPopup(fbprovider).catch((e) => console.error(e))
        } else {
          res = await firebase.auth().signInWithPopup(provider).catch((e) => console.error(e))
        }
        await dispatch('SET_CREDENTIAL', { user: res.user })
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
