<script setup lang="ts">

const emit = defineEmits(['selectDirectory']);

async function selectDirectory() {
    const result = await window.ipcRenderer.invoke('selectDirectory');
    emit('selectDirectory', result);
}

</script>

<template>
    <div class="h-[100vh] w-[100vw] text-center flex justify-center items-center">
        <div>
            <h1>Scratcher</h1>
            <h3 class="text-gray-500">Open a folder to start</h3>
            <button class="mt-4" @click="selectDirectory">
                Open folder
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
