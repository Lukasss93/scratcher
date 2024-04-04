<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import StartUp from "./components/StartUp.vue";
import {computed, ref} from "vue";

let folderPath = ref<string | null>(null);

const isFolderSelected = computed(() => folderPath.value !== null);

</script>

<template>
    <StartUp v-if="!isFolderSelected" @selectDirectory="(val) => folderPath=val"/>
    <div v-if="isFolderSelected">
        <div>
            <a href="https://electron-vite.github.io" target="_blank">
                <img src="/electron-vite.svg" class="logo" alt="Vite logo"/>
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
            </a>
            <a href="page/viewer">
                viewer
            </a>
        </div>
        <HelloWorld msg="Electron + Vite + Vue 3"/>
    </div>

    {{ folderPath }}
</template>

<style scoped lang="scss">
.logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    @apply inline-block;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
}
</style>
