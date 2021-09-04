import Vue from 'vue'
// import Hello from './components/Hello.vue' //componentsの動き用に追加

import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import NumberGuess from './components/NumberGuess.vue'

new Vue({
  el: '#app',
  data: {
    arguments: [],
    message: 'スタートボタンを押してください👍',
    tryCountLeft: 0
  },
  components: {
    AnchorLink,
    EventButtons,
    NumberGuess
  },
  methods: {
    onEventOne() {
      alert('Event 1')
    },
    onEventTwo(argument) {
      this.arguments = []
      this.arguments.push(argument)
    },
    onEventThree(arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2)
    },
    onStart(tryCountLeft) {
      this.message = 'スタート！ 🚀'
      this.tryCountleft = tryCountLeft
    },
    onCollect(tryCountLeft) {
      this.message = '¥essir!!'
      this.tryCountLeft = tryCountLeft
    },
    onLower(tryCountLeft) {
      this.message = 'もっと小さいです 👇'
      this.tryCountLeft = tryCountLeft
    },
    onHigher(tryCountLeft) {
      this.message = 'もっと大きいです️ ️👆'
      this.tryCountLeft = tryCountLeft
    },
    onLose(tryCountLeft) {
      this.message = 'ゲームオーバー 👻'
      this.tryCountLeft = tryCountLeft
    }
  }
})
