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
<h1>��ǰ���� ���</h1>
�α��� �����: <%= session.getAttribute("__ID")%><p>

<form action="Product_Insert_Query.jsp" method="post">
��ǰID: <input type="text" name="_pid"><p>
��ǰ��: <input type="text" name="_pname"><p>
��ǰ����: <input type="text" name="_price"><p>
��ǰ����: <input type="text" name="_info"><p>
<input type="submit" value="���">

</form>

</body>
</html>

