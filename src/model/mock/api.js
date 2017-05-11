import Mock from 'mockjs';

function getTestData(p){
	switch(p){
		case 'userManagerList':
			return userManagerListData()
			break;
	}
}

//获取用户管理列表
function userManagerListData(){
	let testArr = [];
	for(var i = 0; i <= 86; i ++){
		testArr.push({
			id: Mock.Random.guid(),
		    name: Mock.Random.cname(),
		    addr: Mock.mock('@county(true)'),
		    'age|18-60': 1,
		    birth: Mock.Random.date(),
		    sex: Mock.Random.integer(0, 1)
		})
	}
	return { total : 86, user: testArr }
}

export default getTestData;