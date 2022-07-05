<%-- 성명 : 김연우 		학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>계산기3</title>
</head>
<body>
<div align="center">
<h1>계산기</h1>
<%

	String p1 = request.getParameter("p1");
	String p2 = request.getParameter("p2");

	String cal = request.getParameter("cal");
	
	int p3 =0;

	if(cal.equals("+")){
		p3 = Integer.parseInt(p1) + Integer.parseInt(p2);
	}else if (cal.equals("-")){
		p3 = Integer.parseInt(p1) - Integer.parseInt(p2);
	}else if (cal.equals("*")){
		p3 = Integer.parseInt(p1) * Integer.parseInt(p2);
	}else {
		p3 = Integer.parseInt(p1) / Integer.parseInt(p2);
	}

	out.print(p1 + " " + cal + " " + p2 + " = " +p3);
%>
</div>
</body>
</html>

