<template>



    <div id="login">
        <div class="loginForm">
            <div class="loginContent">
                <div class="title">欢迎来到语汇阁聊天平台</div>
                <div class="title">请登录</div>
                <el-input v-model="loginForm.userName" placeholder="请输入内容"></el-input>
                <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                <el-button type="primary" class="loginButton" @click="submitLogin">主要按钮</el-button>
            </div>
        </div>
    </div>


</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                userName: '',
                password: ''
            },

        };
    },

    methods: {
        async submitLogin() {
            await this.$store.dispatch('getUserId', this.loginForm);
            await this.$store.dispatch('initAllChatData')
                        
            let path=this.$route.query.redirect;//用户跳转到登录页面之前的页面路径
            this.$router.replace("/chatroom");
        }
    }
}
</script>


<style scoped>
#login {
    width: 100%;
    height: 100%;
    background-color: rgb(146, 146, 146);
}

.loginForm {
    width: 27%;
    height: 30%;
    background-color: rgb(87, 87, 87);
    padding: 10px;
    margin: 0 auto;
    transform: translateY(65%);
    border: 1px solid skyblue;
    border-radius: 2%;
    display: flex;

}

.loginContent {
    margin: auto;
}

.title {
    text-align: center;
    padding: 5px
}

.loginButton {
    width: 100%;
}

.el-input {
    margin-top: 20px;
}

.el-button {
    margin-top: 20px;
}
</style>