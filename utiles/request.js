import {devUrl} from './baseUrl.js'

export default function(url,data={},method='get'){
	return new Promise((resolve,reject)=>{
		uni.request({
		url:devUrl+url,
		method,
		data,
		header:{
			"X-LC-Id": "7yoqQxyLBNN9MW5rsgTGXbHL-gzGzoHsz",
			"X-LC-Key": "hA8yGYuHjnXWRui1rzTe0C3P",
			"Content-Type": "application/json"
		},
		success(res) {
			resolve(res.data)
		},
		fail(err) {
			reject(err)
		}
	})
	})
	
}