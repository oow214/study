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

<h1>ȸ�� ���� ����</h1>

�α��� �����: <%= session.getAttribute("__ID")%><p>

<%
try{
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery("select * from member");  // resultset���� �Ǿ�����
	// 	rs.next();
	
	
	out.println("<table border='1'>");
	while(rs.next()) {
		String id = rs.getString("id");
		String pw = rs.getString("pw");
		String name = rs.getString("name");
		
		out.println("<tr>");
		out.println("<tr>");
		out.println("<td><a href='Member_Update_UI.jsp?_id=" + id + "&_pw=" + pw + "&_name=" + name + "'>" + id + "</a></td>");
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