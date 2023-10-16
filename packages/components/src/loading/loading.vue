<template>
    <div class="cat-loading">
        <div class="loader">
            <div class="loader-inner">
                <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                </div>
            </div>
        </div>
        <div class="loading-text">{{ loadingText }}</div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'SCLoading' })
import './style/index.less'
const props = defineProps({
    //defineProps为setup语法糖中props的替代方案
    loadingText: {
        type: String,
        default: '加载中...'
    }
})
</script>
