<%-- 성명 : 김연우 		학번 : 202045072 --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <% request.setCharacterEncoding("euc-kr"); %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Output</title>
</head>
<body>
<%
	String _gender = request.getParameter("gender");
	String _area = request.getParameter("area");
	String _name = (String)session.getAttribute("name");
	// 사용자에게 입력받은 정보를 Session에 저장
	session.setAttribute("gender", _gender);
	session.setAttribute("area", _area);
	// Session의 ID를 불러온다.
	String sessionId = session.getId();
	// Session의 최대 유지 시간을 불러온다.
	int intervalTime = session.getMaxInactiveInterval();
%>


<B><%=_name%></B> 님의 성별은<P>
<B><%=session.getAttribute("gender") %></B> 이고
주거지는<B><%=session.getAttribute("area") %></B> 입니다.<P>
세션ID : <%=sessionId%><P>
세션 유지 시간 : <%=intervalTime%>초<P>
<%  session.invalidate();  %>


</body>
</html>

