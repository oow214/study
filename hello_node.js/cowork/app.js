// app.js
const express = require('express');

const app = express();

const db = require('./models/index');
const member = require('./models/member');

const { Member } = db;

app.use(express.json()); 

app.get('/api/members', async (req, res) => {
  const { team } = req.query;
	if (team) {
    // const teamMembers = await Member.findAll({ where: { team: team }});
    const teamMembers = await Member.findAll({ where: { team }});
    res.send(teamMembers);
  } else {
    const members = await Member.findAll();
    res.send(members);
  }
});

app.get('/api/members/:id', async (req, res) => {
	// const id = req.params.id;
  const { id } = req.params;  // params 객체에서 id라는 프로퍼티의 값만 id라는 변수에 담는 것이다.
  const member = await Member.findOne({ where: { id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

app.post('/api/members', async (req, res) => {
  const newMember = req.body;
  // const member = Member.build(newMember);
  // await member.save(); // 배열에 추가
  const member = await Member.create(newMember);
  res.send(member); // 추가한 객체 리스폰스에 담아서 보냄
});

// app.put('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body; // 새 정보 body에 담기
//   const result = await Member.update(newInfo, { where: { id } }) // id 찾기
//   if (result[0]) {
//     res.send({ message: `${result[0]} row(s) affected` }); // 바뀐 정보 담아서 보내기
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

app.put('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id }});  // 해당 id값을 가진 row를 가져옴
  if (result[0]) {
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop];
    });
    await member.save();
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});


app.delete('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCount = await Member.destroy({ where: { id } });
  if (deletedCount) {
    res.send({ message: `${deletedCount} row(s) delected` });
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});


app.listen(3000, () => {
	console.log('Server is listening...');
});

