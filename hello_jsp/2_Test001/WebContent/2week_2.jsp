<!-- ����:�迬��      �й�:202045072 -->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<script language="javascript">
<!--
	function viewDate() {
	var d = new Date();
	document.FormName.Date.value = (d.getYear() + 1900) + " ��" + (d.getMonth()+1) + " ��" + d.getDate() + " ��";
}
//-->
</script>
<body>
<%@ page import = "java.util.Date"%>
<%
	Date d = new Date();
	out.println("Server Date: " + (d.getYear() + 1900) + " ��" + (d.getMonth()+1) + " ��" + d.getDate() + " ��");
%> 

<Form Name = "FormName">
	Local Date : <Input Type = "Text" Name = "Date">
	<Input Type = "Button" Value = "Call Local Date" onClick = "viewDate()">
</Form>
</body>
</html>