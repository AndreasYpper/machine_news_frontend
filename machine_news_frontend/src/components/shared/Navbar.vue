<template>
  <div class="navbar-container">
    <div class="nav-item home">
      <router-link :to="{ name: 'home' }" class="link"
        >Home</router-link
      >
    </div>
    <div class="nav-item create-machine">
      <button class="link" @click="openCreateModal('machine')">Create Machine</button>
    </div>
    <div class="nav-item create-status">
      <button class="link" @click="openCreateModal('status')">Create Status</button>
    </div>

    <!-- Create machine modal -->
    <transition name="create-modal" appear>
    <div class="create-modal" v-if="get_modal_status('create_machine')">
      <div class="modal-backdrop" @click="closeCreateModal()" />
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="modal-close" @click="closeCreateModal()"> &times; </span>
        </div>
        <div class="modal-body">
          <CreateMachine />
        </div>
      </div>
    </div>
    </transition>
    <transition name="create-modal" appear>
    <div class="create-modal" v-if="get_modal_status('machine_status')">
      <div class="modal-backdrop" @click="closeCreateModal()" />
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="modal-close" @click="closeCreateModal()"> &times; </span>
        </div>
        <div class="modal-body">
          <CreateStatus />
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import stateModals from '@/modules/modals'
import CreateMachine from '@/components/CreateMachine'
import CreateStatus from '@/components/CreateStatus'
import { ref } from 'vue'
export default {
  components: {
    CreateMachine,
    CreateStatus
  },
  setup() {
    const { set_modal, get_modal } = stateModals

    const create_machine = ref(false)
    const create_status = ref(false)

    function openCreateModal(modal) {
      if(modal === 'machine') {
        set_modal('create_machine', true)
      }
      else if(modal === 'status') {
        set_modal('machine_status', true)
      }
    }

    function get_modal_status(name) {
      return get_modal(name)
    }

    function closeCreateModal() {
      set_modal('create_machine', false)
      set_modal('machine_status', false)
    }

    return {
      create_machine,
      create_status,
      openCreateModal,
      get_modal_status,
      closeCreateModal
    }
  }
}
</script>

<style scoped>
.navbar-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
.nav-item {
  padding: 10px;
  cursor: pointer;
  border-radius: 15px;
}
/* .nav-item:hover {
  background-color: #f8cacb;
} */
.link {
  padding: 10px;
  text-decoration: none;
  color: #ff3b3f;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  border: none;
  font-size: 1vw;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
}
.link:hover {
  background-color: #f8cacb;
}
.home {
  grid-column: 2 / 4;
}
.create-machine {
  grid-column: 5 / 7;
}
.create-status {
  grid-column: 8 / 10;
}
.create-modal-enter-from {
  opacity: 0;
}
.create-modal-enter-to {
  opacity: 1;
}
.create-modal-enter-active {
  transition: all 0.5s ease;
}
.create-modal-leave-from {
  opacity: 1;
}
.create-modal-leave-to {
  opacity: 0;
}
.create-modal-leave-active {
  transition: all 0.25s ease;
}
.create-modal {
  position: fixed; /* Stay in place */
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
}
.modal-backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.modal-dialog {
  position: relative;
  z-index: 2;
  grid-column: 5 / 9;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin-top: 100px;
  background-color: #fefefe;
  border-radius: 10px;
}
.modal-header {
  grid-column: 1 / 13;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}
.modal-close {
    cursor: pointer;
    margin: 0 3px 0 10px;
    font-size: 1.5vw;
    grid-column: 12;
}
.modal-body {
  grid-column: 1 / 13;
  grid-row: 2;
}
</style>