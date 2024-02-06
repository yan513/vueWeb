<script setup lang="ts">
  const list = [
    {
      'name': '纯CSS实现Tab滑块选项卡',
      'path': '/slide'
    }
  ]
</script>

<template>
  <main>
    <ul>
      <li v-for="(item, i) in list" :key="i" @click="$router.push(item['path'])">
        {{item['name']}}
      </li>
    </ul>
  </main>
</template>
