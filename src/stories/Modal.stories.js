import Modal from '../components/Modal.vue'
import Button from '../components/Button.vue'

import { action } from '@storybook/addon-actions'

export default {
  title: 'Modal',
  component: 'Modal',
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
    showModal: { control: 'boolean' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal, Button },
  template:
  `<Modal v-model="showModal">
    <template slot="header">
        {{ header }}
    </template>
    <template slot="content">
        {{ content }}
    </template>
    <template slot="footer">
        <Button name="Cancel" className="black" :useDiv="true" @click="clickCancel" />
        <Button name="OK" className="primary right" :useDiv="true" @click="clickOk" />
    </template>
   </Modal>`,
   methods: {
    clickCancel: action('Click Cancel Button'),
    clickOK: action('Click OK Button')
   }
})

export const Default = Template.bind({})
Default.args = {
    header: 'Header',
    content: 'Content',
    showModal: true
}