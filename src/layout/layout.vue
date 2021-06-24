<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" style="height: 60px"/>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <AreaChartOutlined />
          <span>上传图像</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin:16px 16px 0 16px">
        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">
          此处上传
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vvvvv-Admin
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {
  AreaChartOutlined
} from '@ant-design/icons-vue';
import {reactive, ref} from 'vue';

interface Data {
  [key: string]: unknown
}

interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}

export default {
  components: {
    AreaChartOutlined
  },
  setup(props: Data, context: SetupContext): Data {
    let collapsed = ref<Boolean>(false)
    let selectedKeys = ref<string[]>(['1'])
    return {
      collapsed,
      selectedKeys
    };
  }
};
</script>

<style scoped>
</style>