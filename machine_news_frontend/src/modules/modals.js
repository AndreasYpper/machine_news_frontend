import { reactive } from "@vue/reactivity";

const modal = reactive({
    name: '',
    is_open: false
})

function set_modal(name, open_value) {
    modal.name = name
    modal.is_open = open_value
}

function get_modal(name) {
    if(modal.name == name) {
        return modal.is_open
    }
    return false
}

export default { set_modal, get_modal}