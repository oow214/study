<%-- 성명 : 김연우 		학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Input</title>
</head>
<body>
<%
	request.setCharacterEncoding("euc-kr");

	String _name = request.getParameter("name");
	String _password = request.getParameter("password");
	session.setAttribute("name", _name);
	session.setAttribute("password", _password);
	
	//Session의 유지시간을 600초로 설정
	session.setMaxInactiveInterval(60*10);
%>

<Form Action="Output.jsp" Method="post">
	<H1>사용자 기본정보 입력</H1>
	
	1. 사용자의 성별은?<BR>
	<Input Type="radio" Name="gender" Value="남">남
	<Input Type="radio" Name="gender" Value="여">여<P>
	
	2. 사용자의 주거지는?<BR>
	<Input Type="radio" Name="area" Value="경기도">경기도
	<Input Type="radio" Name="area" Value="강원도">강원도
	<Input Type="radio" Name="area" Value="충청도">충청도
	<Input Type="radio" Name="area" Value="경상도">경상도
	<Input Type="radio" Name="area" Value="전라도">전라도<P>
	<Input Type="submit" Value="결과보기">
</Form>

</body>
</html>