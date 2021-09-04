import Vue from 'vue'
// import Hello from './components/Hello.vue' //componentsの動き用に追加

import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import NumberGuess from './components/NumberGuess.vue'

new Vue({
  el: '#app',
  data: {
    arguments: []
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
      this.rguments.push(argument)
    },
    oneventThree(arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2)
    }
  }
})
