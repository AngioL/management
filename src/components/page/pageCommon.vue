<template>
    <div class="pagination">
        <el-pagination background layout="prev, pager, next, sizes" :total="total"
            :page-sizes="[10, 100, 200, 300, 400]" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'

const { layout, total, pageSizes } = defineProps({
    layout: {
        type: String
    },
    total: {
        type: Number
    },
    pageSizes: {
        type: Array
    }
})

const emit = defineEmits(['handleCurrentChange', 'handleSizeChange'])
const handleSizeChange = (val) => {
    emit('handleSizeChange', val)
}
const handleCurrentChange = (val) => {
    emit('handleCurrentChange', val)
}

</script>

<style lang="scss" scoped>

</style>