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
<h1>계산기4</h1>
<Form action="Calculator4.jsp" method="get">
	<Input type ="text" name="p1" size="10"> +
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="+">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="Calculator4.jsp" method="get">
	<Input type ="text" name="p1" size="10"> -
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="-">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="Calculator4.jsp" method="get">
	<Input type ="text" name="p1" size="10"> *
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="*">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="Calculator4.jsp" method="get">
	<Input type ="text" name="p1" size="10"> /
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="/">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<%
	String p1 = request.getParameter("p1");
	String p2 = request.getParameter("p2");
	String cal = request.getParameter("cal");
	if (p1 == null) p1 ="0";
	if (p2 == null) p2 ="0";
	if (cal == null) cal ="";
	
	int p3 =0;

	if(cal.equals("+")){
		p3 = Integer.parseInt(p1) + Integer.parseInt(p2);
	}else if (cal.equals("-")){
		p3 = Integer.parseInt(p1) - Integer.parseInt(p2);
	}else if (cal.equals("*")){
		p3 = Integer.parseInt(p1) * Integer.parseInt(p2);
	}else if (cal.equals("/")){
		p3 = Integer.parseInt(p1) / Integer.parseInt(p2);
	}

	out.print(p1 + " " + cal + " " + p2 + " = " +p3);
%>
</div>
</body>
</html>