<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

<%

String id = request.getParameter("_id");
out.println("사용자 ID  " + id + "는 로그인이 실패하였습니다.");

%>

</body>
</html>

