<%-- 성명 : 김연우  학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>

<h1>로그인</h1>

<form action="LoginCheck.jsp" method="post">
	ID : <input type="text" name="id"><p>
	PW : <input type="password" name="pw"><p>
	<input type="submit" value="로그인"> <input type="reset" value="취소">	
</form>

</body>
</html>

