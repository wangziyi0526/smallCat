<template>
  <button class="sc-button" :class="buttonStyle"><slot /></button>
</template>
<script lang="ts" setup>
defineOptions({ name: 'SCButton' });
import './style/index.less';
import { computed } from 'vue';
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`sc-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
