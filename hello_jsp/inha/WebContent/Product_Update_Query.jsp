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

<h1>상품 정보 수정 확인</h1>

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
	out.println("<p>상품ID: " + pid);
	out.println("<p>상품명: " + pname);
	out.println("<p>상품가격: " + price);
	out.println("<p>상품정보: " + info);
	out.println("<p>상품정보등록이 완료되었습니다.");
	
} catch(Exception e) {
	e.printStackTrace();
}

%>

</body>
</html>

