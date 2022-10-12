import { action } from '@storybook/addon-actions'
import Navigation from '../components/Navigation.vue'
import 'semantic-ui-css/semantic.min.css';

export default {
	title: 'Navigation',
	component: Navigation,
	argTypes: {
		title: { control: 'text' },
		isToggle: {control: 'boolean'},
	},
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Navigation },
	template:
	`<Navigation :title="title" :isToggle="isToggle">
		<template slot="content">
		  <a class="item" @click="action">Navigation 1</a>
		  <a class="item" @click="action">Navigation 2</a>			
		  <div class="right menu">
		    <div class="item">Navigation</div>
			<a class="item" @click="action">Navigation 3</a>
		  </div>
		</template>
		<template slot="mobile-right-content">
		  <div class="item">Navigation</div>
		</template>
		<template slot="toggle-content">
		  <a class="item" @click="action">Navigation 1</a>
		  <a class="item" @click="action">Navigation 2</a>
		  <a class="item" @click="action">Navigation 3</a>
		</template>
		</Navigation>`,
	methods: {
		action: action('link-clicked')
	},
});

export const Normal = Template.bind({});
Normal.args = {
	title: 'Navigation',
	isToggle: true,
};
