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
<h1>��ǰ ���� ����</h1><p>

�α��� �����: <%= session.getAttribute("__ID")%><p>

<%
try{
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb_c", "root", "0903");
	Statement stmt = conn.createStatement();
	ResultSet rs = stmt.executeQuery("select * from product");  // resultset���� �Ǿ�����
	// 	rs.next();
	
	
	out.println("<table border='1'>");
	while(rs.next()) {
		String pid = rs.getString("pid");
		String pname = rs.getString("pname");
		int price = rs.getInt("price");
		String info = rs.getString("info");
		
		out.println("<tr>");
		out.println("<td><a href='Product_Delete_UI.jsp?_pid="+ pid +"&_pname="+ pname +"&_price="+ price +"&_info="+ info +"'>" + pid + "</a></td>");
		out.println("<td>" + pname + "</td>");
		out.println("<td>" + price + "</td>");
		out.println("<td>" + info + "</td>");

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