<%-- ���� : �迬�� 		�й� : 202045072 --%>
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
	
	//Session�� �����ð��� 600�ʷ� ����
	session.setMaxInactiveInterval(60*10);
%>

<Form Action="Output.jsp" Method="post">
	<H1>����� �⺻���� �Է�</H1>
	
	1. ������� ������?<BR>
	<Input Type="radio" Name="gender" Value="��">��
	<Input Type="radio" Name="gender" Value="��">��<P>
	
	2. ������� �ְ�����?<BR>
	<Input Type="radio" Name="area" Value="��⵵">��⵵
	<Input Type="radio" Name="area" Value="������">������
	<Input Type="radio" Name="area" Value="��û��">��û��
	<Input Type="radio" Name="area" Value="���">���
	<Input Type="radio" Name="area" Value="����">����<P>
	<Input Type="submit" Value="�������">
</Form>

</body>
</html>