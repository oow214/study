// app.js
const express = require('express');

const app = express();

let members = require('./members');

app.use(express.json()); 

app.get('/api/members', (req, res) => {
  const { team } = req.query;
	if (team) {
    const teamMembers = members.filter((m) => m.team === team);
    res.send(teamMembers);
  } else {
    res.send(members);
  }
});

app.get('/api/members/:id', (req, res) => {
	// const id = req.params.id;
  const { id } = req.params;  // params 객체에서 id라는 프로퍼티의 값만 id라는 변수에 담는 것이다.
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    res.send(member);
  } else {
    // res.status(404).send('There is no such member');
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

app.post('/api/members', (req, res) => {
  const newMember = req.body;
  members.push(newMember); // 배열에 추가
  res.send(newMember); // 추가한 객체 리스폰스에 담아서 보냄
});

app.put('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const newInfo = req.body; // 새 정보 body에 담기
  const member = members.find((m) => m.id === Number(id)); // id 찾기
  if (member) {
    Object.keys(newInfo).forEach((prop) => { // id 있으면 모든 프로퍼티 수정
      member[prop] = newInfo[prop];
    });
    res.send(member); // 바뀐 정보 담아서 보내기
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

app.delete('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const membersCount = members.length;
  members = members.filter((member) => member.id !== Number(id));
  if (members.length < membersCount) {
    res.send({ message: 'Deleted' });
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});


app.listen(3000, () => {
	console.log('Server is listening...');
});

