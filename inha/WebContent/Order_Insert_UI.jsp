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
<h1>��ǰ �ֹ�</h1>

<%
request.setCharacterEncoding("euc-kr");
String pid = request.getParameter("_pid");
String pname = request.getParameter("_pname");
String price = request.getParameter("_price");
String info = request.getParameter("_info");
%>

�α��� �����: <%= session.getAttribute("__ID")%><p>

<form action="Order_Insert_Query.jsp" method="post">
��ǰID: <input type="text" name="_pid" value=<%=pid %>><p>
��ǰ��: <input type="text" name="_pname" value=<%=pname %>><p>
��ǰ����: <input type="text" name="_price" value=<%=price %>><p>
��ǰ����: <input type="text" name="_info" value=<%=info %>><p>
�ֹ������: <%= session.getAttribute("__ID")%><p>
�ֹ�����: <input type="text" name="_count"><p>
<input type="submit" value="�ֹ�">

</form>

</body>
</html>

