let route = {
	pages:[
		{
			"name":"123123",
			"path":"123123",
			"guardian":"isLogin"
		}
	],
	guardians:{
		isLogin(){
			return Promise((y,n)=>{
				y();
			});
		}
	}
}

export default route