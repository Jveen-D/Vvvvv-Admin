<template>
  <div>
    login
  </div>
</template>

<script lang="ts">
import {reactive, ref} from 'vue';

interface Data {
  [key: string]: unknown
}

interface SetupContext {
  attrs: Data
  emit: (event: string, ...args: unknown[]) => void
}

export default {
  setup(props: Data, context: SetupContext): Data {
    return {};
  }
};
</script>

<style scoped>

</style>