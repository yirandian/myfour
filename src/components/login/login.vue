<template>
  <div class="loginbox" >
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="top"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="mybtn" @click="login">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      // 用户对象
      ruleForm: {
        username: "",
        password: ""
      },
      // 验证规则
      rules: {
        username: [
          // 这个属性是必须的，如果没有提示 message， 当失去焦点时触发
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      // 判断 form 中的元素是否满足验证条件
      this.$refs.ruleForm.validate(valid => {
        // valid boole 值，如果通过返回 true， 否则返回 false
        if (valid) {
          // 发送登录请求
          this.$http.post("login", this.ruleForm)
            .then(res => {
            // 解构参数
            console.log(res);
            let { data, meta } = res.data;
            // 判断登录状态
            if (meta.status === 200) {
              // 提示登录成功
              this.$message({
                message: meta.msg,
                type: "success"
              });
              // 跳转到首页
              this.$router.push("/home");
            } else {
              this.$message.error(meta.msg);
            }
          });
        } else {
          this.$message.error("请输入正确的用户名和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.loginbox {
    width: 500px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
}
.mybtn {
    width: 100%;
}
</style>
