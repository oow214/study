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

<h1>등록 정보 확인</h1>

<%
request.setCharacterEncoding("euc-kr");
String id = request.getParameter("_id");
String pw = request.getParameter("_pw");
String name = request.getParameter("_name");

try {
	
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	stmt.executeUpdate("UPDATE member SET pw='"+ pw +"', name='"+ name +"' WHERE id='"+ id +"';");
	out.println("<p>ID: " + id);
	out.println("<p>PW: " + pw);
	out.println("<p>NAME: " + name);
	out.println("<p>수정이 완료되었습니다.");
	
} catch(Exception e) {
	e.printStackTrace();
}

%>

</body>
</html>

