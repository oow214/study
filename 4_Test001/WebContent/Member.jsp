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
<form action="MemberReslut.jsp" method="get">
	
	<h1 style="text-align:center; ">회원가입</h1>
	
	성명 <input type="text" name ="name"><p>
	ID <input type="text" name ="id"><p>
	암호 <input type="text" name ="pw"><p>
	주소 <input type="text" name ="add"><p>
	집 전화번호 <input type="text" name ="homenum"><p>
	사무실 전화번호 <input type="text" name ="offnum"><p>
	핸드폰 <input type="text" name ="phone"><p>
	이메일 <input type="text"name ="email"><p>
	관심분야 <input type="text" name ="fav"><p>
	
	<Input type="submit" Value = "확인">
	<Input type="reset" Value = "취소">
</form>

</body>
</html>

