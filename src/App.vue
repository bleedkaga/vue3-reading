<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
 const formConfig = [
            { tag: 'a-form-item', label: '供应商名称', model: 'supplierName', type: 'input', },
            { tag: 'a-form-item', label: '供应商发货单据号', model: 'supplierSn', type: 'input', },
            { tag: 'a-form-item', label: '材料入库单据号', model: 'materialSn', type: 'input', },
            { tag: 'a-form-item', label: '材料入库时间', model: 'inputTime', type: 'date-picker', },
            { tag: 'a-form-item', label: '材料出库时间', model: 'outTime', type: 'date-picker', },
            { tag: 'a-form-item', label: '供应商单据金额', model: 'supplierAmount', type: 'input', },
            { tag: 'a-form-item', label: '配送运费', model: 'postage', type: 'input', },
            { tag: 'a-form-item', label: '产品名称', model: 'productName', type: 'input', },
        ]
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
