function kebabToSnake(str){
	var str_arr = str.split("-");
	var res = str_arr[0];
	var i = 1;
	if(str.search("-") === -1)
	{
		return str;
	}
	while(i < str_arr.length)
	{
		res = res + "_" + str_arr[i]
	}
	return res

}
var str = "abc-def"
kebabToSnake(str);