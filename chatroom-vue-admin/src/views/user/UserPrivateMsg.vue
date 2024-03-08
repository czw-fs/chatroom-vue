<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column prop="id" label="用户id" width="120"></el-table-column>
            <el-table-column prop="sendUserId" label="发送人id" show-overflow-tooltip></el-table-column>
            <el-table-column prop="sendUserName" label="发送人名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="sendUserProfile" label="发送人头像" show-overflow-tooltip>
                <template slot-scope="scope">
                    <img :src="scope.row.sendUserProfile" min-width="70" height="70" />
                </template>
            </el-table-column>

            <el-table-column prop="receiveUserId" label="接收人id"></el-table-column>
            <el-table-column prop="receiveUserName" label="接收人名称"></el-table-column>      
            <el-table-column prop="receiveUserProfile" label="接收人头像">
                <template slot-scope="scope">
                    <img :src="scope.row.sendUserProfile" min-width="70" height="70" />
                </template>
            </el-table-column>      

            <el-table-column prop="content" label="发送内容"></el-table-column>      
            <el-table-column prop="msgTypeId" label="发送消息类型">
                <template slot-scope="scope" v-if="scope.row.msgTypeId === 1">文本</template>
                <template slot-scope="scope" v-else-if="scope.row.msgTypeId === 2">图片</template>
                <template slot-scope="scope" v-else-if="scope.row.msgTypeId === 3">文件</template>
            </el-table-column>      

            <el-table-column prop="sendTime" label="发送时间" width="200">
                <template slot-scope="scope">{{ scope.row.sendTime }}</template>
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
import { getUserPrivateMsgList } from '@/api/UserPrivateMsg.js'
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
            getUserPrivateMsgList(this.query).then(res => {
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