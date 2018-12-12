(function (window) {
  // 定义插件对象
  const myPlugin = {}
  
  // 插件对象必须有一个install方法
  myPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.filter('upper-format', (value) => {
      return value.toUpperCase()
    })

    // 3. 添加实例方法
    Vue.prototype.$instanceMethod = function () {
      console.log('vm $instanceMethod()')
    }
  }

  // 暴露插件对象
  window.myPlugin = myPlugin
})(window)

/*
执行函数定义: 创建函数对象, 可能会创建一个变量来保存这个函数的地址值
执行函数: 找到函数对象, 执行函数对象包含语句
*/
// var fn = {}
/*fn()

function fn() {

}*/
