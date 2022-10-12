import Selection from '../components/Selection.vue'

import 'semantic-ui-css/semantic.min.css'

const templateDecorator = () => ({
  template: `
<div class="ui form"><story/></div>
	`,
});

export default {
  title: 'Selection',
  component: Selection,
  argTypes: {
    title: { control: 'text' },
    options: { control: 'object' }
  },
  decorators: [templateDecorator]
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Selection },
  template: `<Selection v-model="value" :title="title" :options="options" />`,
  data () {
    return { value: '1' }
  }
});

export const Title = Template.bind({});
Title.args = {
  title: 'Selection',
  options: [{ id: 1, name: 'select1' }, { id: 2, name: 'select2' }]
};
