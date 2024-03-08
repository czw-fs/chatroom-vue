<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column prop="id" label="用户id" width="120"></el-table-column>
            <el-table-column prop="userName" label="用户名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="password" label="密码" show-overflow-tooltip></el-table-column>

            <el-table-column prop="userProfile" label="用户头像" show-overflow-tooltip>
                <template slot-scope="scope">
                    <img :src="scope.row.sendUserProfile" min-width="70" height="70" />
                </template>
            </el-table-column>

            <el-table-column prop="userStateId" label="用户状态">
                <template  slot-scope="scope">
                    {{ scope.row.userStateId === 1 ? '在线' : (scope.row.userStateId === 2 ? '离线' : '其他状态') }}
                </template>
                
            </el-table-column>

            <el-table-column prop="isEnabled" label="账号是否可用">
                <template  slot-scope="scope">
                    {{ scope.row.isEnabled === 1 ? '可用' : (scope.row.isEnabled === 2 ? '不可用' : '其他状态') }}
                </template>
            </el-table-column>

            <el-table-column prop="createTime" label="注册日期" width="200">
                <template slot-scope="scope">{{ scope.row.createTime }}</template>
            </el-table-column>

            <el-table-column prop="updateTime" label="修改日期" width="200">
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
import { getUserInfoList } from '@/api/UserInfo.js'
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
            getUserInfoList(this.query).then(res => {
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
</style>