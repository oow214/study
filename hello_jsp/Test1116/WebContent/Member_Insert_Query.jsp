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

<h1>입력 정보 확인</h1>

<%
String id = request.getParameter("_id");
String pw = request.getParameter("_pw");
String name = request.getParameter("_name");

try {
	
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	stmt.executeUpdate("INSERT INTO member(id, pw, name) VALUES('" + id + "', '" + pw + "', '"+ name +"')");
	out.println("<p>ID: " + id);
	out.println("<p>PW: " + pw);
	out.println("<p>NAME: " + name);
	out.println("<p>입력이 완료되었습니다.");
	
} catch(Exception e) {
	e.printStackTrace();
}

%>

</body>
</html>

