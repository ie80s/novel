<template>
    <div id="register">
        <div class="gutter">
            <van-row gutter="20">
                <van-col span="10"> <van-icon name="arrow-left" class="arrow" size="25" @click="topout"/></van-col>
                <van-col span="10"><span class="sta">注册</span></van-col>
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
             <van-field
                readonly
                clickable
                :value="value"
                @touchstart.native.stop="show = true"
                label="电话号码"
                placeholder="请输入电话号码"
                required
            />
             <van-field
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
            <van-number-keyboard
            v-model="value"
            :show="show"
            :maxlength="6"
            close-button-text="完成"
            @blur="show = false"
            />
            <div class="success">
                
                <van-button type="primary" to="/"  color="linear-gradient(to right, #4bb0ff, #6149f6)" plain>注册</van-button>
                
          
                
            </div>
    </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        show: false,
        value: '',

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
  }
}
</script>

<style scoped lang="scss">
.sta{
    font-weight:800;
    font-size: 20px;
}

.van-grid{
    margin-top: 10%;
}
.success{
    margin-left: 80%;
}
</style>
