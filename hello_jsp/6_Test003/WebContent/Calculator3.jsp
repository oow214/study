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
<Form action="CalculatorResult3.jsp" method="get">
	<Input type ="text" name="p1" size="10"> +
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="+">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="CalculatorResult3.jsp" method="get">
	<Input type ="text" name="p1" size="10"> -
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="-">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="CalculatorResult3.jsp" method="get">
	<Input type ="text" name="p1" size="10"> *
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="*">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>

<Form action="CalculatorResult3.jsp" method="get">
	<Input type ="text" name="p1" size="10"> /
	<Input type ="text" name="p2" size="10">
	<Input type ="hidden" name="cal" value="/">
	<Input type ="submit" value="실행">
	<Input type ="reset" value="취소">
</Form><p>
</div>
</body>
</html>


