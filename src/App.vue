<template>
  <div id="app">
    <button id="show-modal" @click="showFirstModal">Show Modal</button>
    <ag-modal ref="firstAgModal">
      <template slot="header">
        <h3 class="normal">First Header</h3>
      </template>
      <div slot="body">First Body</div>
      <div slot="footer" slot-scope="{ hide }">
        First footer
        <br>
        <button class="modal-default-button" @click="hide">OK</button>
        <button class="modal-default-button" @click="showSecondModal">2nd Modal</button>
      </div>
    </ag-modal>
    <ag-modal ref="secondAgModal">
      <template slot="header">
        <h3 class="alert">ALERT!!!</h3>
      </template>
      <div slot="body">Alert Body</div>
      <div slot="footer" slot-scope="{ hide }">
        <button class="modal-default-button" @click="hide">OK</button>
        <button class="modal-default-button" @click="showThirdModal">3rd Modal</button>
      </div>
    </ag-modal>
    <ag-modal ref="thirdAgModal">
      <template slot="header">
        <h3 class="third">THIRD!!!</h3>
      </template>
      <div slot="footer" slot-scope="{ hide }">
        <button class="modal-default-button" @click="hide">OK</button>
      </div>
    </ag-modal>
  </div>
</template>

<script>
import AgModal from "./components/AgModal.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    AgModal,
  },
  methods: {
    showFirstModal() {
      var self=this;
      this.$refs.firstAgModal.show();
      setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          this.showSecondModal();
        })
      }, 5000)
    },
    showSecondModal() {
      this.$refs.secondAgModal.show();
    },
    showThirdModal() {
      this.$refs.thirdAgModal.show();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
