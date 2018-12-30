const ModalHandler = {
  install(Vue) {
    Vue.activeModal = [];
    Vue.hiddenModal = [];

    const modalStackHandler = function(flag) {
      if (flag) {
        return function(component) {
          console.log(component, 'New Modal opened...'); //eslint-disable-line
          if (Vue.activeModal.length > 0) {
            Vue.activeModal[Vue.activeModal.length - 1].toggle();
            console.log(
              Vue.activeModal[Vue.activeModal.length - 1],
              'Active Modal hidden...'
            );
            Vue.hiddenModal.push(Vue.activeModal.pop());
          }
          Vue.activeModal.push(component);
        };
      } else {
        return function(component) {
          console.log(component, 'Current Modal closed...'); //eslint-disable-line
          Vue.activeModal.pop();
          if (Vue.hiddenModal.length > 0) {
            Vue.hiddenModal[Vue.hiddenModal.length - 1].toggle();
            console.log(
              Vue.hiddenModal[Vue.hiddenModal.length - 1],
              'Hidden Modal visible...'
            );
            Vue.activeModal.push(Vue.hiddenModal.pop());
          }
        };
      }
    };

    Vue.onModalOpen = modalStackHandler(true);
    Vue.onModalclose = modalStackHandler(false);

    Vue.prototype.$modalHandler = function(component) {
      if (component.showModal) {
        Vue.onModalOpen(component);
      } else {
        Vue.onModalclose(component);
      }
    };
  }
};

export default ModalHandler;
