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

<%

String id = request.getParameter("_id");
String pw = request.getParameter("_pw");

try {
	
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery("SELECT * FROM member WHERE id='" + id + "'AND pw='" + pw + "'");
	
	// rs.next()�� true��� ���̵� �ִٴ� ��
	if(rs.next()) {
		session.setAttribute("__ID", id);
		session.setAttribute("__PW", pw);
		response.sendRedirect("Success.jsp?_id=" + id);
	} else {
		response.sendRedirect("Fail.jsp?_id=" + id);
	}
	
} catch(Exception e) {
	e.printStackTrace();
}

%>

</body>
</html>

