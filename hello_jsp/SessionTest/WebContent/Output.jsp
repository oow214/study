<%-- ���� : �迬�� 		�й� : 202045072 --%>
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
	// ����ڿ��� �Է¹��� ������ Session�� ����
	session.setAttribute("gender", _gender);
	session.setAttribute("area", _area);
	// Session�� ID�� �ҷ��´�.
	String sessionId = session.getId();
	// Session�� �ִ� ���� �ð��� �ҷ��´�.
	int intervalTime = session.getMaxInactiveInterval();
%>


<B><%=_name%></B> ���� ������<P>
<B><%=session.getAttribute("gender") %></B> �̰�
�ְ�����<B><%=session.getAttribute("area") %></B> �Դϴ�.<P>
����ID : <%=sessionId%><P>
���� ���� �ð� : <%=intervalTime%>��<P>
<%  session.invalidate();  %>


</body>
</html>

