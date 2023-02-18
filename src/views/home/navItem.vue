<template>
    <el-aside width="200px" class="aside">
        <!-- 无子级 -->
        <el-menu-item :index="item.url" v-if="!item.children">
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
        </el-menu-item>
        <!-- 有子级 -->
        <el-sub-menu :index="item.url" v-else>
            <template #title>
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.title }}</span>
            </template>

            <nav-item v-for="sub in item.children" :key="sub.url" :item="sub" />
        </el-sub-menu>
    </el-aside>
</template>

<script setup>
import { defineProps } from 'vue'

const { item } = defineProps({
    item: {
        type: Object
    }
})




</script>