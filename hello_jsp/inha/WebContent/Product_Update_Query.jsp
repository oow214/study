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

<h1>��ǰ ���� ���� Ȯ��</h1>

<%
request.setCharacterEncoding("euc-kr");
String pid = request.getParameter("_pid");
String pname = request.getParameter("_pname");
String price = request.getParameter("_price");
String info = request.getParameter("_info");

try {
	
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	stmt.executeUpdate("UPDATE product SET pname='"+ pname +"', price="+ price +", info='"+ info +"' WHERE pid='"+ pid +"'");
	out.println("<p>��ǰID: " + pid);
	out.println("<p>��ǰ��: " + pname);
	out.println("<p>��ǰ����: " + price);
	out.println("<p>��ǰ����: " + info);
	out.println("<p>��ǰ��������� �Ϸ�Ǿ����ϴ�.");
	
} catch(Exception e) {
	e.printStackTrace();
}

%>

</body>
</html>

