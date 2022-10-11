import Input from "../components/Input.vue"
import { action } from '@storybook/addon-actions'
import 'semantic-ui-css/semantic.min.css'

const templateDecorator = () => ({
    template: `<div class="ui form"><story/></div>`
})

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    title: { control: 'text' },
    isValide: { conrol: 'boolean' }
  },
  decorators: [templateDecorator],
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Input },
    template: `<Input v-model="text" :title="title" :isValide="isValide" @input="action" @enter="action"/>`,
    data() {
        return { text: '', name: 'Input' }
    },
    methods: {
        action: action('input action'),
    }
})

export const Title = Template.bind({})
Title.args = {
    title: 'Input',
    isValide: false
}