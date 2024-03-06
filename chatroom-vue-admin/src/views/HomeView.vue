<template>
  <el-container>

    <el-header class="homeHeader">
      <router-link to="/" active-class="titlebox">
      <div class="title">
        微言聊天室管理端
      </div>
    </router-link>
      <div>
        <el-dropdown class="choices" @command="commandHandler">
          <span class="el-dropdown-link">
            {{ user.name }}<i><img :src="user.userProfile"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
            <el-dropdown-item command="setting">设置</el-dropdown-item>
            <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <el-aside>
        <el-menu router unique-opened>
          <el-submenu :index="index + ''" v-for="(item, index) in routes" v-if="item.hidden != true" :key="index">
            <template slot="title">
              <i style="color: #2F86D2;margin-right: 8px" :class="item.iconCls"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item :index="child.path" v-for="(child, indexj) in item.children" :key="indexj">{{ child.name
              }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path != '/'">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ this.$router.currentRoute.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="homeWelcome" v-if="this.$router.currentRoute.path == '/'">
            欢迎来到微言聊天室管理端！
        </div>
        <router-view class="homeRouterView" />
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      user: {
        name: 'hello',
        userProfile: 'data:image/jpeg;base64,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'
      }
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    commandHandler(cmd) {
      //注销登录操作
    }
  }
}
</script>


<style scoped>
.homeHeader {
  background-color: #409eff;
  display: flex;
  /*flex布局*/
  align-items: center;
  /*cross交叉轴中*/
  justify-content: space-between;
  /*左右两侧（main主轴）对齐*/
  padding: 0px;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 30px;
  font-family: 华文行楷;
  /* color: #ffffff; */
}

.homeHeader .choices {
  cursor: pointer;
}

.choices img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 10px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}

.homeWelcome {
  text-align: center;
  font-size: 30px;
  font-family: 华文行楷;
  color: #409eff;
}

.homeRouterView {
  margin-top: 15px;
}
.el-aside{
  overflow: hidden;
}

.titlebox{
  text-decoration: none;
  color: black;
}
.title:active{
  color: rgb(51, 51, 51);
}
</style>
