import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vue와 vuex연결

export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'CHANGE_TURN'
export const RESET_GAME = 'RESET_GAME'
export const NO_WINNER = 'NO_WINNER' // export는 import {파일 이름(일치하는 파일이름만 가져올 수 있다/ 작은 파일 단위로)} from './store'

export default new Vuex.Store({
  // export default는 import 이름(파일에서 중요한거 하나) from './store'처럼 사용가능
  state: {
    tableData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    turn: 'O',
    winner: ''
  }, //vue의 data와 비슷
  getters: {
    turnMessage(state) {
      return state.turn + '님이 승리하셨습니다.'
    }
  }, //vue의 computed와 비슷
  mutations: {
    [SET_WINNER](state, winner) {
      //대문자로 작성
      state.winner = winner
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn) //vuex는 this.$set이 사용X, vue.set을 사용하지 않으면 데이터값은 바뀌어도 화면은 바귀지 않는다.
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O'
    },
    [RESET_GAME](state) {
      state.turn = 'O'
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    },
    [NO_WINNER](state) {
      state.winner = ''
    }
  }, //state를 수정할 때 동기적으로 사용.
  actions: {} //비동기를 사용할때, 또는 여러 mutations을 연달아 실행할 때 사용
})
