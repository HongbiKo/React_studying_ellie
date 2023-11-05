import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prevname = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    setPerson((prev) => ({...prev, mentors: prev.mentors.map((mentor)=>{
      if(mentor.name === prevname) {
        return {...mentor, name: current};
      }
        return mentor;
    })}))
  }
  const handleAdd = () => {
    const addName = prompt(`누구의 이름을 추가하고 싶은가요?`);
        const addTitle = prompt(`직책의 이름은 무엇인가요?`)
        setPerson((prev)=>({...prev, mentors: prev.mentors.concat({name: addName, title: addTitle}) }))
  }
  const handleDelete = () => {
    const deleteName = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    setPerson((prev)=> ({...prev, mentors: prev.mentors.filter((mentor)=> mentor.name !== deleteName)}))
  }

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {
          person.mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          ))
        }
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자'
    },
    {
      name: '제임스',
      title: '시니어개발자'
    }
  ],
}