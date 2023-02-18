<template>
    <el-aside width="200px" class="aside">
        <el-menu default-active="/index" class="el-menu-vertical-demo" router>
            <nav-item v-for="v in items" :key="v.url" :item="v" />
            <!-- <el-menu-item :index="v.url" v-for="v in items" :key="v.url">
                <el-icon>
                    <component :is="v.icon"></component>
                </el-icon>
                <span>{{ v.title }}</span>
            </el-menu-item> -->
            <!-- 无子级 -->
            <!-- <el-menu-item index="/user">
                <el-icon><icon-menu /></el-icon>
                <span>用户管理</span>
            </el-menu-item>

            <el-menu-item index="/device">
                <el-icon><icon-menu /></el-icon>
                <span>设备监控</span>
            </el-menu-item> -->
            <!-- 有子级 -->
            <!-- <el-sub-menu index="1-4">
                <template #title>

                    <el-icon><icon-menu /></el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->
        </el-menu>
    </el-aside>
</template>

<script setup>
import NavItem from './navItem.vue'

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { reactive } from 'vue';

const items = reactive([
    {
        title: '首页', url: '/index', icon: Document,
    },
    {
        title: '用户管理', url: '/user', icon: Location,
        children: [
            {
                title: '用户详情',
                url: '/user/info',
                icon: Location,
            },
            {
                title: '用户分析',
                url: '/user/analyse',
                icon: Location,
            },
        ]
    },
    {
        title: '设备监控', url: '/device', icon: Document,
        children: [
            {
                title: '设备详情',
                url: '/device/list',
                icon: Document
            },
            {
                title: '设备管理',
                url: '/device/manage',
                icon: Document
            },
            {
                title: '设备维修',
                url: '/device/repair',
                icon: Document
            },
        ]
    },
    { title: '统计分析', url: '/census', icon: Setting },
])




</script>