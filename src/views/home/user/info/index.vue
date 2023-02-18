<template>
   <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%">
         <el-table-column prop="name" label="Name" />
         <el-table-column prop="mobile" label="电话" />
         <el-table-column prop="address" label="Address" />
         <el-table-column prop="sex" label="性别">
            <template #default="{ row }">
               <el-tag :type="row.sex === 0 ? '' : 'danger'">
                  {{ sexFilter(row.sex) }}
               </el-tag>

            </template>
         </el-table-column>
      </el-table>

      <!-- <div class="pagination">
         <el-pagination background layout="prev, pager, next, sizes" :total="total"
            :page-sizes="[10, 100, 200, 300, 400]" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
      </div> -->
      <pageCommon :layout="pageParameter.layout" :total="pageParameter.total" :pageSizes="pageParameter.pageSizes"
         @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" />
   </el-card>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import axios from '@/api'
import pageCommon from '@/components/page/pageCommon.vue';

const tableData = ref([])
const listQuery = reactive({
   pageindex: 1,
   pagesize: 10,
   name: '',
})

const pageParameter = reactive({
   layout: 'prev, pager, next, sizes',
   total: 100,
   pageSizes: [10, 100, 200, 300, 400]
})

// 性别文本格式化
const sexFilter = computed(() => item => {
   switch (item) {
      case 0:
         return '男';
      case 1:
         return '女'
      default:
         return '男'
   }
})


onMounted(async () => {

   userQuery()
})

async function userQuery() {
   const { data } = await axios.get(`user/${listQuery.pageindex}/${listQuery.pagesize}`)
   let { data: d, success, message } = data
   if (success) {
      tableData.value = d.dataList // 表格数据
      // pageParameter.total = d.recordCount
   } else {
      alert(message)
   }
}

const handleSizeChange = (val) => {
   debugger
   listQuery.pagesize = val
   userQuery()
}
const handleCurrentChange = (val) => {
   listQuery.pageindex = val
   userQuery()
}

</script>