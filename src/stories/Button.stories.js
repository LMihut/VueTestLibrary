import { action } from '@storybook/addon-actions'
import Button from '../components/Button.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    name: { control: 'text' },
    className: {
      control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}
    },
    isLoading: { control: 'boolean' },
    useDiv: { control: 'boolean'}
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  }
});

export const Normal = Template.bind({});
Normal.args = {
  name: 'Button',
  className: 'primary',
  useDiv: false,
  isLoading: false,
};
