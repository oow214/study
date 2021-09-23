<!-- 성명:김연우      학번:202045072 -->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>실전과제</title>
</head>
<body>
<%
	String str = "Hello, Welcome to JSP World! Lets Go!";
%>
	입력되어 있는 문자열의 길이는 <%=str.length() %>입니다. <br>
	'JSP'라는 문자는 <%=str.indexOf("JSP") %>번째에 위치해 있습니다.<br><br>
	입력 문자열을 소문자로 변환한 결과는 <%=str.toLowerCase() %>입니다.<br>
	입력 문자열을 대문자로 변환한 결과는 <%=str.toUpperCase() %>입니다.<br>
</body>
</html>
