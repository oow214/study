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
<h1>상품 주문</h1>

<%
request.setCharacterEncoding("euc-kr");
String pid = request.getParameter("_pid");
String pname = request.getParameter("_pname");
String price = request.getParameter("_price");
String info = request.getParameter("_info");
%>

로그인 사용자: <%= session.getAttribute("__ID")%><p>

<form action="Order_Insert_Query.jsp" method="post">
상품ID: <input type="text" name="_pid" value=<%=pid %>><p>
상품명: <input type="text" name="_pname" value=<%=pname %>><p>
상품가격: <input type="text" name="_price" value=<%=price %>><p>
상품정보: <input type="text" name="_info" value=<%=info %>><p>
주문사용자: <%= session.getAttribute("__ID")%><p>
주문수량: <input type="text" name="_count"><p>
<input type="submit" value="주문">

</form>

</body>
</html>

