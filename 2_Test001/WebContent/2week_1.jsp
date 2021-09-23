<!-- 성명:김연우      학번:202045072 -->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

<%@ page import = "java.util.Date"%>
<%
Date d = new Date();
out.println((d.getYear()+1900)+" 년 "+(d.getMonth()+1)+" 월 "+d.getDate()+" 일");
%>

</body>
</html>