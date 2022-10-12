<template>
    <div class="ui grid">
        <div class="computer tablet only row">
            <div class="ui fixed top menu">
                <div class="brand item">{{ title }}</div>
                <slot name="content"></slot>
            </div>
        </div>
        <div class="mobile only row">
            <div class="ui fixed top menu">
                <div class="brand item">{{ title }}</div>
                <slot name="mobile-left-content"></slot>
                <div class="right menu">
                    <slot name="mobile-right-content"></slot>y
                    <div v-if="isToggle" id="menu" class="ui right simple dropdown item">
                        <i class="content icon" @click="clickMenu"></i>
                        <div class="menu">
                            <slot name="toggle-content"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.mobile.row{
	padding-top: 0px !important;
	margin-top: 0px !important;
}

@media (max-width: 767px) {
  .main.container {
    padding: 5em 2em 2em !important;
  }
}
</style>

<script>
export default {
    name: 'Navigation',
    props: ['title', 'isToggle'],
    methods: {
        clickMenu() {
        }
    }
}
</script>

