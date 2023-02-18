<template>
    <div class="common-layout" id="module">
        <el-container>
            <!-- 左侧导航 -->
            <NavMenu />
            <el-container>
                <el-header>
                    <Breadcrumd />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import NavMenu from './navMenu.vue'
import Breadcrumd from './breadcrumd.vue';

</script>