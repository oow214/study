<!-- ����:�迬��      �й�:202045072 -->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.util.*" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>��������</title>
</head>
<%
	String str = "Hello, Welcome to JSP World! Lets Go!";
%>

<script language="javascript">
<!--
	function view() {
		alert("���ڿ��� ���� : "+<%=str.length() %>); 
	}
//-->
</script>

<body>

	�ԷµǾ� �ִ� ���ڿ��� ���̴� <%=str.length() %>�Դϴ�. <br>
	'JSP'��� ���ڴ� <%=str.indexOf("JSP") %>��°�� ��ġ�� �ֽ��ϴ�.<br><br>
	�Է� ���ڿ��� �ҹ��ڷ� ��ȯ�� ����� <%=str.toLowerCase() %>�Դϴ�.<br>
	�Է� ���ڿ��� �빮�ڷ� ��ȯ�� ����� <%=str.toUpperCase() %>�Դϴ�.<br>
	

<% 
	Calendar c = Calendar.getInstance(); 
%>
	������	<%= c.get(Calendar.YEAR) %>��
			<%= c.get(Calendar.MONTH)+1 %>��
			<%= c.get(Calendar.DATE) %>�� �Դϴ�. <br>
	<Input Type="button" Value="OK" onClick="view()">
			
</body>
</html>