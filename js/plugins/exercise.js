//exercise.js
/*:
 * @plugindesc test
 * @author sam
 * @help
 *　kkkkk
*/
var x=10;
var str="abc";
var nextLine="\r\n";
console.log(str);
//建立一個txt檔，並將Hello寫入
function Hello()
{
	//alert("Hello everyone");
	var path=window.location.pathname.replace(/(\/www|)\/[^\/]*$/,'/');
	if(path.match(/^\/([A-Z]\:)/))
	{
		path=path.slice(1);
	}
	path=decodeURIComponent(path)+"myText.txt";
	var fs=require('fs');
	var a=$gameVariables.value(1);
	fs.writeFile(path,"am i success"+a+"\r\nok",function(err)
	{
		if(err)
			return console.log(err);
	});
	
			
}
function ReadFiles()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET","myText.txt",false);
	xhr.send(null);
	var fileContent = xhr.reponseText;
	
	$gameVariables.setValue(50,fileContent);
	$gameVariables.setValue(1,50);
}