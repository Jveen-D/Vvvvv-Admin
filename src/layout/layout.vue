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
        <div :style="{ padding: '24px', background: '#fff' }">
          <a-upload-dragger
              :style="{width: '100%',height: '300px'}"
              v-model:fileList="fileList"
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
          >
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">点击或者拖拽上传图片</p>
          </a-upload-dragger>
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
  AreaChartOutlined,
  InboxOutlined
} from '@ant-design/icons-vue';
import {reactive, ref} from 'vue';
import message from 'ant-design-vue/lib/message';
interface Data {
  [key: string]: unknown
}
interface SetupContext {
  attrs: Data
  emit: (event: string, ...args: unknown[]) => void
}
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}
interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
export default {
  components: {
    AreaChartOutlined,
    InboxOutlined
  },
  setup(props: Data, context: SetupContext): Data {
    let collapsed = ref<Boolean>(false)
    let selectedKeys = ref<string[]>(['1'])
    const handleChange = (info: FileInfo) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    };
    return {
      collapsed,
      selectedKeys,
      handleChange,
      fileList: ref([]),
    };
  }
};
</script>

<style scoped>
</style>