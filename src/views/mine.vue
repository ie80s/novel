<template>
    <div id="Mine">         
        <van-sticky>
            <van-cell is-link @click="showPopup" class="cell">
                <van-icon name="setting-o" size="20" />
            </van-cell>
        </van-sticky>
           
        
        <div class="person">
            <van-row>
                <van-col span="8">
                    <van-image
                        round
                        cover
                        width="5rem"
                        height="5rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </van-col>
                <van-col class="name" span="12">{{myname}}</van-col>
                <van-col  class="ziliao" span="10" >编辑查看个人资料</van-col>
            </van-row>     
        </div>

        <div class="task">
            <van-row type="flex" justify="space-between">
                <van-col span="6">我的任务</van-col> 
                <van-col span="6">更多任务</van-col>
            </van-row><br>
            <div class="taskFirst">
                <van-grid :column-num="3">
                    <van-grid-item
                        v-for="value in 1 "
                        :key="value"
                        icon="gift-o"
                        text="幸运抽奖"     
                    />
                    <van-grid-item
                        v-for="value in 1 "
                        :key="value"
                        icon="manager-o"
                        text="邀请好友"     
                    />
                    <van-grid-item
                        v-for="value in 1 "
                        :key="value"
                        icon="certificate"
                        text="每日签到"     
                    />
                </van-grid>

            </div>
        </div>
        <div class="account">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
            <van-cell
                v-for="item in list"
                :key="item.id"
                :title="item.name" 
                :icon="item.icon"        
            />
            </van-list>
        </div>

        <van-popup v-model="show" position="right" :style="{ height: '100%',width :'80%'}"> 
            <div class="back">
                <van-row gutter="18">
                    <van-col span="10"> <van-icon name="arrow-left" class="arrow" size="25"/></van-col>
                    <van-col span="8"><span class="sta">设置</span></van-col>
                </van-row>        
            </div><br>
            <van-cell
                v-for="item in infon"
                :key="item.id"
                :title="item.name" 
                :icon="item.icon"        
            />
            <div class="login">
                <van-row gutter="11">
                    <van-col span="15">
                        <van-button type="primary" to="login" color="linear-gradient(to right, #4bb0ff, #6149f6)" plain>登录</van-button>
                        <van-button type="primary" to="register" color="linear-gradient(to right, #4bb0ff, #6149f6)" plain>注册</van-button>
                        </van-col>
                    <van-col span="8">
                        <van-button type="primary" color="linear-gradient(to right, #4bb0ff, #6149f6)" plain>退出登录</van-button>
                        </van-col>
                </van-row>      
            </div>
        </van-popup>   
        <pops></pops>
    </div>
</template>

<script>
import pops from '@/components/pops'
export default {
    components:{
        pops
    },
    data (){
        return {
            show: false,
            myname:'A1高闪来一个秋梨膏',
            list: [
                {
                    id:0,
                    name:"消息",
                    icon:"bullhorn-o",
                },
                {
                    id:1,
                    name:"等级",
                    icon:"upgrade",
                },
                {
                    id:2,
                    name:"浏览历史",
                    icon:"browsing-history-o",
                },
                {
                    id:3,
                    name:"评论",
                    icon:"records",
                },
                {
                    id:4,
                    name:"书单",
                    icon:"description",
                },
                {     id:5,
                    name:"关注",
                    icon:"like-o",
                },
                {
                    id:6,
                    name:"收藏",
                    icon:"star-o",
                },
                {
                    id:7,
                    name:"成为作家",
                    icon:"edit"
                }
                ],
            loading: true,
            finished: true,
            infon:[
                {
                    id:0,
                    name:"个性主题",
                },
                 {id:1,
                    name:"阅读字体",
                },
                 {id:2,
                    name:"绑定手机",
                },
                 {id:3,
                    name:"通知提醒",
                },
                 {
                    id:4,
                    name:"帮助中心",
                    icon:"",
                },
                 {id:5,
                    name:"我要反馈",
                    icon:"",
                },
                 {id:6,
                    name:"关于Novel阅读",
                },
                 {id:7,
                    name:"清理缓存",
                },
            ]
        }
    },
    methods: {
    showPopup() {
      this.show = true;
    },
    onLoad() {
    //   异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 7; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
}
}
</script>


<style scoped lang="scss">
#id{
    display: flex;
}
.van-sticky{
    margin-left: 90%;   
}
.van-image{
    margin-left: 10%;
}
.van-col{
    font-size: 15px;
}
.ziliao{
    margin-top: 3%;
}
.name{
    margin-top: 5%;
}
.task{
    margin-top: 10%;
    margin-left: 5%;
}
.van-popup{
    font-family: '微软雅黑';
}
.back{
    width: 100%;
    height: 4%;
    margin-top: 3%;
}
span{
    font-size: 15px;
}
.sta{
    font-weight:900;
    font-size: 20px;
}
.login{
    margin-top: 72%;
}
</style>