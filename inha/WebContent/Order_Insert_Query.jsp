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

<h1>��ǰ �ֹ� Ȯ��</h1>
<jsp:useBean class="mall.OrderDAO" id="myOrder"></jsp:useBean>
<%
request.setCharacterEncoding("euc-kr");
String id = (String)session.getAttribute("__ID");
String pid = request.getParameter("_pid");
String pname = request.getParameter("_pname");
String price = request.getParameter("_price");
String info = request.getParameter("_info");
String count = request.getParameter("_count");

myOrder.insert(id, pid, Integer.parseInt(count));

out.println("<p>��ǰID: " + pid);
out.println("<p>��ǰ��: " + pname);
out.println("<p>��ǰ����: " + price);
out.println("<p>�ֹ������: " + count);
out.println("<p>��ǰ �ֹ��� �Ϸ�Ǿ����ϴ�.");

%>

</body>
</html>

