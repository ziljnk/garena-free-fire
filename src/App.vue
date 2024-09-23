<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
    html, body {
        padding: 0; 
        margin: 0;
    }

    body {
        height: 100%;
        background: #fafafa url('https://sso.garena.com/universal/assets/bg-light-mobile-2c1194ef.png') center / cover repeat;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
