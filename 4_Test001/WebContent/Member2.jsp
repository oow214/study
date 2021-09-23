<%-- 성명 : 김연우 		학번 : 202045072 --%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<form action="" method="get">

	<h1 style="text-align:center; ">회원가입</h1>
	
	<table>
		<tr><td>성명 :</td> <td><input type="text" name ="name"></td> </tr>
		<tr><td>ID :</td> <td><input type="text" name ="id"></td>   </tr>
		<tr><td>암호 :</td> <td><input type="text" name ="pw"></td>   </tr>
		<tr><td>주소 :</td> <td><input type="text" name ="add"></td>  </tr>
	</table>
	
	전화번호 : <input type="text" name ="homenum"><p>
	
	종교 :
		<Input type="radio" name ="rel" value="1" checked="checked">기독교
		<Input type="radio" name ="rel" value="2">천주교
		<Input type="radio" name ="rel" value="3">불교<p>
		
	관심분야 :
		<input type="checkbox" name ="fav" value="게임" checked="checked">게임
		<input type="checkbox" name ="fav" value="쇼핑">쇼핑
		<input type="checkbox" name ="fav" value="교육">교육<p>
	
	<Input type="submit" Value = "확인">
	<Input type="reset" Value = "취소">
	
</form>

</body>
</html>

