<template>
    <transition name="alert-up" 
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        appear
    >
        <div class="y-alert" :class="[Class]" v-if="show">
            <y-svg :type="svgClass" :width="20"></y-svg>
            <div class="y-alert-c" ref="contents">
                <div class="y-title" v-text="title" v-if="title"></div>
                <div class="y-content" v-text="content" v-if="content"></div>
            </div>
            <y-svg type="x" @click.native="closeOn" v-if="close && CloseText === ''" class="y-alert-close" :width="14"></y-svg>
            <span class="y-alert-close" v-if="CloseText" @click="closeOn">{{CloseText}}</span>
        </div>
    </transition>
</template>
<style lang="less">
@import "alert";
</style>
<script>
export default {
    name: 'y-alert',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        close: {
            type: Boolean,
            default: true
        },
        CloseText: {
            type: String,
            default: ''
        },
        Icon: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            show: true
        }
    },
    methods: {
        closeOn () {
            this.show = false
        },
        beforeEnter (el) {
            el.style.height = 0 + 'px'
        },
        enter (el) {
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
            }
        },
        afterEnter (el) {
            el.style.height = ''
        },
        beforeLeave (el) {
            if (el.scrollHeight !== 0) {
                console.log(1)
                el.style.height = el.scrollHeight + 'px'
            }
        },
        leave (el) {
            if (el.scrollHeight !== 0) {
                setTimeout(() => {
                    el.style.height = 0 + 'px'
                })
            }
        }
    },
    computed: {
        'Class': function () {
            return `y-alert-${this.type}`
        },
        'svgClass': function () {
            if (this.type === 'info') {
                return 'info'
            }
            if (this.type === 'success') {
                return 'checkmark'
            }
            if (this.type === 'warning') {
                return 'help'
            }
            if (this.type === 'danger') {
                return 'close'
            }
        }
    }
}
</script>
