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
<h1>상품정보 등록</h1>
로그인 사용자: <%= session.getAttribute("__ID")%><p>

<form action="Product_Insert_Query.jsp" method="post">
상품ID: <input type="text" name="_pid"><p>
상품명: <input type="text" name="_pname"><p>
상품가격: <input type="text" name="_price"><p>
상품정보: <input type="text" name="_info"><p>
<input type="submit" value="등록">

</form>

</body>
</html>

