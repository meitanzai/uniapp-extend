// 
let routeConfig = {};

/*
	
*/

let routeFn = async (params)=>{
	let route = findRoute(params);
	
	// 
	let guardianFn = routeConfig.guardians[route.guardian];
	if(guardianFn && typeof guardianFn == 'function'){
		await guardianFn();
	}
	if(route.query){
		
	}
}

// 查找当前路由所匹配的配置
let findRoute = (params)=>{
	let route = routeConfig.pages.find((item)=>{
		// 路由名称 或 路由路径匹配
		return (params.name && params.name == item.name) || (params.path == item.path);
	});
	return route;
}

/* 把 routeFn 挂载到 uni 中，方法名为 route */
let install = (Vue,routeConfig) => {
	routeConfig = routeConfig;
	uni.route = routeFn;
}

export default {
	install
}