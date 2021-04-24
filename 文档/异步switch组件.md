### 异步switch组件

#### 使用方式：

##### 在 <code>script</code> 中引用组件

```
import asyncSwitch from "@/components/helang-asyncSwitch/helang-asyncSwitch.vue"
export default {
    components: {
        "async-switch":asyncSwitch
    }
}
```

##### 在 <code>template</code> 中添加组件

```
<async-switch :checked="checked1" @change="change1"></async-switch>
```

#### 属性说明：

属性名 | 类型 | 默认值 | 说明
--------|------|------|------
checked | Boolean | false | 是否选中
disabled | Boolean | false | 是否禁用
color | Color | #007aff | 组件颜色
disabledColor | Color | #e5e5e5 | 组件禁用状态颜色

#### 事件说明：

事件名 | 说明
--------|------
@change | 组件被点击时触发的函数

#### 使用示例：

```
import asyncSwitch from "@/components/helang-asyncSwitch/helang-asyncSwitch.vue"
export default {
    components: {
        "async-switch":asyncSwitch
    },
    data() {
        return {
            checked1:true
        }
    },
    methods: {
        change1(){
            uni.showLoading({
                title:"正在请求",
                mask:true
            })
            setTimeout(()=>{
                uni.hideLoading();
                    /* 设置 switch 组件是否选中的状态 */
                    this.checked1=!this.checked1;
            },1000);
        }
    }
}
```

#### 友情提示：
1. 当前项目源码使用了 ES6 和 scss 请添加运行依赖
2. [插件ZIP]只包含模板文件和数据文件，不包含项目运行依赖（如 pages.json）
3. [示例项目ZIP]是完整的项目文件，可下载后导入 HBuilderX 中直接运行体验
4. 文件下载在当前页面的上部靠右位置，有 [下载插件ZIP] [下载示例项目ZIP] 按钮，点击即可下载