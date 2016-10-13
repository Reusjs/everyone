import Modal from "./components/modal"
import Notification from "./components/notification"
import Message from "./components/message"
import loading from "./components/loading"


import Alert from "./components/alert"
import Button from "./components/button"
import Radio from "./components/radio"
import RadioGroup from "./components/radio-group"
import RadioButton from "./components/radio-button"
import Checkbox from "./components/checkbox"
import CheckboxGroup from "./components/checkbox-group"

import Tooltips from "./components/tooltips"
import Popover from "./components/popover"

import Dropdown from "./components/dropdown"


// utils
import click from "./components/utils/clickDel"

const install = (Vue) => {
    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Tooltips.name, Tooltips)
    Vue.component(Popover.name, Popover)
    Vue.component(Dropdown.name, Dropdown)

    Vue.use(click)

    Vue.prototype.$notify = Notification
    Vue.prototype.$modal = Modal
    Vue.prototype.$message = Message
    Vue.prototype.$loading = loading
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
    install,
    Alert,
    Modal,
    Button,
    Message
}