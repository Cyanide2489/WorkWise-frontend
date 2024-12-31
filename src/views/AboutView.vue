<script setup lang="ts">
import Button from 'primevue/button'
import { getUsers } from '@/services/api'

console.log(getUsers())
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button icon="pi pi-home" aria-label="Save" />
    <Button label="Profile" icon="pi pi-user" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
