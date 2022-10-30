import axios from 'axios'
import store from '@/store'

// 本次触发是在 vuex 的 test 模块中触发的，在 test 模块被执行时 store 实例尚未构建完成
console.log('request', store)

// 延迟之后 store 实例已经构建完成，所以可以打印 store
setTimeout(() => {
	console.log('setTimeout', store)
})

const service = axios.create({
	baseURL: 'https://www.baidu.com/',
	timeout: 5000
})

export default service
