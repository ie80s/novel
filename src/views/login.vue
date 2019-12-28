<template>
  <div class="Login">
      <div class="gutter">
            <van-row gutter="20">
                <van-col span="10"> <van-icon name="arrow-left" class="arrow" size="25" @click="topout"/></van-col>
                <van-col span="10"><span class="sta">登录</span></van-col>
            </van-row> 
        </div>       
         <van-grid :column-num="1" icon-size="150px">
                    <van-grid-item
                        v-for="value in 1 "
                        :key="value"
                        icon="./assets/4.png"
                        text="Novel阅读"       
                    />
         </van-grid>
         <van-cell-group>
            <van-field
                
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                
                @click-right-icon="$toast('question')"
            />
            <van-field
               
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
             </van-cell-group>
            <van-number-keyboard
            v-model="value"
            :show="show"
            :maxlength="6"
            close-button-text="完成"
            @blur="show = false"
            />
        <div class="succs">
            <van-button type="primary" to="/" color="linear-gradient(to right, #4bb0ff, #6149f6)" plain >登录</van-button>
        </div>
  </div>
</template>

<script>
// import axios from "axios";
// import qs from 'Qs';
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://47.94.10.228';
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        show: false,
        value: '',
        // userLogin:{
        //        uid:'',
        //        upsd:''
               
        //    } ,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
      topout(){
          this.$router.go(-1);
      }
//       checkUid() {
//       if (this.userLogin.uid == "") {
//         alert("请输入账号");
//       } else if (
//         this.userLogin.uid != "" &&
//         !this.regUser.ui.test(this.userLogin.ui)
//       ) {
//         alert("用户名不符合要求");
//       } else {
//         return true;
//       }
//   },
//    checkPwd(){
//       if (this.userLogin.upsd == "") {
//         alert("请输入密码");
//       } else if (
//         this.userLogin.upsd != "" &&
//         !this.regUser.ups.test(this.userLogin.ups)
//       ) {
//         alert("密码不符合要求");
//       } else {
//         return true;
//       }
//     },
//     loginbutton(userLogin){
//        if (
//         this.checkUid() &&
//         this.checkPwd()
//       ) {
//         axios
//           .post("/user/login", 
//           qs.stringify({           
//             uid: this.userLogin.uid, 
//             upsd: this.userLogin.upsd,	
//             autoLogin: false
//             }
//           ))
//           .then(res => { if (res.data.status == '0') {
//               // console.log(res)
//               alert(res.data.msg);
//               window.localStorage.setItem("uid", this.userLogin.uid);
//             //   window.localStorage.setItem("udept", res.data.data.udept);
//               window.localStorage.setItem("isLogined",true)
//             if (this.userLogin.autoLogin ){
//             // window.localStorage.setItem("uid", this.userLogin.uid);
//             window.localStorage.setItem("upsd", this.userLogin.upsd);
//             window.localStorage.setItem("autoLogin", this.userLogin.autoLogin);
//             }
//               this.$router.push("/");
//               // console.log('登录成功')
//             } else {
//               alert(res.data.msg);
//               // console.log('登录失败')
//             }
//           })
//           .catch();
//       }
//     }
}
}
</script>

<style scoped>
.sta{
    font-weight:800;
    font-size: 20px;
}

.van-grid{
    margin-top: 10%;
}
.succs{
    margin-left: 80%;
}
</style>
