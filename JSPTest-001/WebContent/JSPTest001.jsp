<!-- ����:�迬��      �й�:202045072 -->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>��������</title>
</head>
<body>
<%
	String str = "Hello, Welcome to JSP World! Lets Go!";
%>
	�ԷµǾ� �ִ� ���ڿ��� ���̴� <%=str.length() %>�Դϴ�. <br>
	'JSP'��� ���ڴ� <%=str.indexOf("JSP") %>��°�� ��ġ�� �ֽ��ϴ�.<br><br>
	�Է� ���ڿ��� �ҹ��ڷ� ��ȯ�� ����� <%=str.toLowerCase() %>�Դϴ�.<br>
	�Է� ���ڿ��� �빮�ڷ� ��ȯ�� ����� <%=str.toUpperCase() %>�Դϴ�.<br>
</body>
</html>
