<template>
  <div>
    <el-table ref="multipleTable"
      :data="tableData" style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column property="id" label="id" width="120"></el-table-column>
      <el-table-column property="userName" label="用户名" width="120"></el-table-column>
      <el-table-column property="userProfile" label="头像" show-overflow-tooltip>
        <template   slot-scope="scope">            
          <img :src="scope.row.userProfile"  min-width="70" height="70" />
        </template>  
      </el-table-column>
    </el-table>

    <!-- 分页插件 -->
    <el-pagination background layout="prev, pager, next" :total="query.total" :current-page="query.pageNum"
      :page-size="query.pageSize" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import { getSystemUserInfo } from '@/api/SystemUser.js'
export default {
  data() {
    return {
      query: {
        pageNum: 1,
        pageSize: 3,
        total: 0
      },
      tableData: [],
      multipleSelection: []
    }
  },

  mounted() {
    this.getPage()
  },

  methods: {

    getPage() {
      getSystemUserInfo(this.query).then(res => {
        res = res.data
        this.tableData = res.rows;
        this.query.total = res.total;
      }).catch(error => {
        this.$message.error(error);
      })
    },

    //翻页
    handleCurrentChange(val) {
      this.query.pageNum = val;
      this.getPage();
    },


    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>