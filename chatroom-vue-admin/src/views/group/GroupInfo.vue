<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column prop="id" label="群组id" width="120"></el-table-column>
            <el-table-column prop="groupName" label="群组名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="groupIntro" label="群组简介" show-overflow-tooltip></el-table-column>

            <el-table-column prop="createUser" label="创建人名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createUserId" label="创建人id"></el-table-column>

            <el-table-column prop="createTime" label="日期" width="200">
                <template slot-scope="scope">{{ scope.row.createTime }}</template>
            </el-table-column>

            <el-table-column prop="updateTime" label="日期" width="200">
                <template slot-scope="scope">{{ scope.row.updateTime }}</template>
            </el-table-column>
        </el-table>

        <!-- 分页插件 -->
        <el-pagination background layout="prev, pager, next" :total="query.total" :current-page="query.pageNum"
            :page-size="query.pageSize" @current-change="handleCurrentChange"
            style="float: right; margin-top: 50px;margin-right: 200px;">
        </el-pagination>
    </div>
</template>

<script>
import { getGroupInfoList } from '@/api/GroupInfo.js'
export default {
    data() {
        return {
            query: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            tableData: [],
            multipleSelection: []
        }
    },

    mounted() {
        this.getPage();
    },

    methods: {
        getPage() {
            getGroupInfoList(this.query).then(res => {
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

<style scoped>
img {
    width: 50px;
    height: 50px;
    border-radius: 24px;
}
</style>@/api/GroupMsg.js