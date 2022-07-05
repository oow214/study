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
<h1>회원 정보 조회</h1><p>

로그인 사용자: <%= session.getAttribute("__ID")%><p>

<%
try{
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery("select * from member");  // resultset으로 되어있음
	// 	rs.next();
	
	
	out.println("<table border='1'>");
	while(rs.next()) {
		String id = rs.getString("id");
		String pw = rs.getString("pw");
		String name = rs.getString("name");
		
		out.println("<tr>");
		out.println("<td>" + id + "</td>");
		out.println("<td>" + pw + "</td>");
		out.println("<td>" + name + "</td>");
		out.println("</tr>");
	}
	out.println("</table>");
	
	
	rs.close();
	stmt.close();
	conn.close();
	
} catch(Exception e) {
	e.printStackTrace();
}
%>

</body>
</html>