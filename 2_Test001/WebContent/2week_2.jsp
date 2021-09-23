<!-- 성명:김연우      학번:202045072 -->
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
	document.FormName.Date.value = (d.getYear() + 1900) + " 년" + (d.getMonth()+1) + " 월" + d.getDate() + " 일";
}
//-->
</script>
<body>
<%@ page import = "java.util.Date"%>
<%
	Date d = new Date();
	out.println("Server Date: " + (d.getYear() + 1900) + " 년" + (d.getMonth()+1) + " 월" + d.getDate() + " 일");
%> 

<Form Name = "FormName">
	Local Date : <Input Type = "Text" Name = "Date">
	<Input Type = "Button" Value = "Call Local Date" onClick = "viewDate()">
</Form>
</body>
</html>