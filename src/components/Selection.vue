<template>
    <div class="field">
        <label for="title">{{ title }}</label>
        <div class="ui selection dropdown" :class="{' active visible':isActive}" @click='clickDropdown'>
            <i class="dropdown icon"></i>
            <div class="text">{{ selectedValue }}</div>
            <div class="menu transition" :class="{' visible':isActive}" :style="{'display: block !important':isActive}">
                <SelectItem ref="items" :name="option.name" :id="option.id" :selected="option.id == value" v-for="option in options" :key="option.id" @click="clickItem" />
            </div>
        </div>
    </div>
</template>

<script>
import SelectItem from './SelectItem.vue'

export default {
    name: 'SelectBox',
    props: {
        title: {type: String, default: 'title'},
        value: {required: true},
        options: {type: Array, required: true}
    },
    data() {
        return {
            selectedValue: '',
            isActive: false
        }
    },
    components: {
        SelectItem
    },
    watch: {
        options() {
            this.selectedValue = this.options.find((option) => option.id == this.value).name
        }
    },
    created() {
        var defaultValue = this.options.find((option) => option.id == this.value)
        if (defaultValue) this.selectedValue = defaultValue.name
    
        this.listen(window, 'click', function(e){
            if (!this.$el.contains(e.target)){
                this.isActive = false
            }
        }.bind(this))
    },
    destroyed() {
        if (this._eventRemovers){
            this._eventRemovers.forEach(function(eventRemover){
                eventRemover.remove()
            })
        }
    },
    methods: {
        clickDropdown() {
            this.isActive == false ? this.isActive = true : this.isActive = false
        },
        clickItem(index) {
            this.selectedValue = this.options.find((option) => option.id == index).name
            this.$emit('input', Number(index))
			this.$emit('change')
        },
        listen(target, eventType, callback) {
            if (!this._eventRemovers){
                this._eventRemovers = []
            }
            target.addEventListener(eventType, callback)
            this._eventRemovers.push( {
                remove :function() {
                    target.removeEventListener(eventType, callback)
                }
            })
        }
    }
}
</script>
