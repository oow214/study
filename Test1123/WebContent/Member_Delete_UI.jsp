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

<h1>ȸ������ ����</h1>

<%
request.setCharacterEncoding("euc-kr");
String id = request.getParameter("_id");
String pw = request.getParameter("_pw");
String name = request.getParameter("_name");

%>

<form action="Member_Update_Query.jsp" method="post">
ID: <input type="text" name="_id" value=<%=id %>><p>
PW: <input type="text" name="_pw" value=<%=pw %>><p>
NAME: <input type="text" name="_name" value=<%=name %>><p>
<input type="submit" value="����">

</form>

</body>
</html>

