<%@page import="javax.net.ssl.SSLEngineResult.Status"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"
    import = "java.sql.*"
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

<%

	try{
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
		
		Statement stmt = conn.createStatement();
		stmt.executeUpdate("INSERT INTO member(id, pw, name) values('111','111','111');");
	} catch(Exception e) {
		e.printStackTrace();
	}

%>

</body>
</html>


