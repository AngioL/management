<template>
    <div class="breadcrumb">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="v in lists" :key="v.path">
                <router-link :to="v.path">{{ v.meta.title }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()  // 实例化 路由信息
const lists = ref([])  // 面包屑数据

watch(route, (newV, oldV) => {
    getBreadcrumb(newV.matched)
})

onMounted(() => {
    getBreadcrumb(route.matched)
})

function getBreadcrumb(matched) {
    lists.value = matched; // 路由信息
}

</script>

<style lang="scss" scoped>

</style>