<%-- 성명 : 김연우  학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Check</title>
</head>
<body>

<%
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	
	if (id.equals("inha") && pw.equals("inha")) {
		response.sendRedirect("Success.jsp");
	} else {
		response.sendRedirect("Fail.jsp");
	}
%>

</body>
</html>