// vue的插件库

(function () {

    const MyPlugin={}
    MyPlugin.install=function (Vue,options) {
        Vue.myGlobalMethod=function () {
            console.log("定义全局方法")
        }
        Vue.directives('my-de',function (el,binding) {
            el.textContent=binding.value.toUpperCase();
        })
        Vue.prototype.$myMethod = function () {
            console.log('')
            
        }
    }
    window.MyPlugin=MyPlugin


})()