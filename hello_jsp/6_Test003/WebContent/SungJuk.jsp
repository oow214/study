<%-- 성명 : 김연우 		학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>성적처리</title>
</head>
<body>
<div align="center">
<form action="SungJuk.jsp" method="get">
<h1>성적처리</h1>
<%
	String s1 = request.getParameter("s1");
	String s2 = request.getParameter("s2");
	String s3 = request.getParameter("s3");
	String s4 = request.getParameter("s4");
	
	if(s1 == null) s1 = "0";
	if(s2 == null) s2 = "0";
	if(s3 == null) s3 = "0";
	if(s4 == null) s4 = "0";
	
	int sum = Integer.parseInt(s1)+
			  Integer.parseInt(s2)+
			  Integer.parseInt(s3)+
			  Integer.parseInt(s4);
	
	float avg = sum / 4;
%>
<table>
<tr><td>전자논리회로</td> <td><input type="text" name ="s1" value="<%=s1%>"></td> </tr>
<tr><td>TCP/IP</td> <td><input type="text" name ="s2" value="<%=s2%>"></td></tr>
<tr><td>시스템보안</td> <td><input type="text" name ="s3" value="<%=s3%>"></td></tr>
<tr><td>JAVA프로그래밍</td> <td><input type="text" name ="s4" value="<%=s4%>"></td></tr>
</table><p>

<Input type="submit" Value = "확인">
<Input type="reset" Value = "취소">
<p>
</form>
<%
	out.print("평균 :" + avg);
%>

</div>
</body>
</html>

