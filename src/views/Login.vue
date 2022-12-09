<template>
    <div class="demo-login">
        <Login @on-submit="handleSubmit">
            <UserName name="username" />
            <Password name="password" />
            <div class="demo-auto-login">
                <Checkbox v-model="autoLogin" size="large">Lưu mật khẩu</Checkbox>
                <a>Quên mật khẩu</a>
            </div>
            <Submit />
        </Login>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                autoLogin: true
            }
        },
        methods: {
            checkAutoLogin(){
                return this.autoLogin;
            },
            handleSubmit (valid, { username, password}) {
                if (valid) {
                    const autoLogin = this.checkAutoLogin();
                   this.$store.dispatch("AUTH/login",{
                    userNameOrEmailAddress: username, 
                    password: password, 
                    rememberClient: autoLogin
                });
                }
            }
        }
    }
</script>
<style>
    .demo-login{
        width: 400px;
        margin: 0 auto !important;
    }
    .demo-auto-login{
        margin-bottom: 24px;
        text-align: left;
    }
    .demo-auto-login a{
        float: right;
    }
</style>