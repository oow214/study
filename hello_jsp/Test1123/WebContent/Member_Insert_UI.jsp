<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"
    import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

로그인 사용자: <%= session.getAttribute("__ID")%><p>

<form action="Member_Insert_Query.jsp" method="post">
ID: <input type="text" name="_id"><p>
PW: <input type="text" name="_pw"><p>
NAME: <input type="text" name="_name"><p>
<input type="submit" value="등록">

</form>

</body>
</html>

