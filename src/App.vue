<template>
  <div id="app">
    <button id="show-modal" @click="showFirstModal">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <!-- <modal ref="modal" @toggleAlert="showAlertModalView"></modal>
    <alert-modal ref="alertmodal" @toggleThirdModal="showThirdModal"></alert-modal>
    <third-modal ref="thirdmodal"></third-modal>-->
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
import Modal from "./components/Modal.vue";
import AlertModal from "./components/AlertModal.vue";
import ThirdModal from "./components/ThirdModal.vue";

export default {
  name: "app",
  components: {
    AgModal,
    Modal,
    AlertModal,
    ThirdModal
  },
  methods: {
    // showModalView() {
    //   this.$refs.modal.show();
    // },
    // showAlertModalView() {
    //   this.$refs.alertmodal.show();
    // },
    // showThirdModal() {
    //   this.$refs.thirdmodal.show();
    // },
    showFirstModal() {
      this.$refs.firstAgModal.show();
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
