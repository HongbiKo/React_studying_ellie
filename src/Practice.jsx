import React from 'react';
import { useImmer } from 'use-immer';

export default function Practice (){
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const current = prompt(`누구의 이름을 바꾸고 싶나요?`);
    const name = prompt(`뭐라고 바꾸고 싶나요?`);

    updatePerson((person)=> {
      const mentor = person.mentors.find((mentor) => mentor.name === current);
      mentor.name = name;
    })
  }

  const handleAdd = () => {
    const name = prompt(`누구의 이름을 추가하고 싶은가요?`);
		const title = prompt(`직함은 무엇인가요?`);
		updatePerson((person) => {person.mentors.push({name, title})})
  }

  const handleDelete = () => {
    const name = prompt(`누구의 이름을 삭제하고 싶나요?`);

    updatePerson((person) => {
      const index = person.mentors.findIndex((mentor)=> mentor.name === name);
      person.mentors.splice(index, 1);
    })
  }

  return(
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는 : </p>
      <ul>
        {
          person.mentors.map((mentor, index)=>(<li key={index}>{mentor.name} ({mentor.title})</li>))
        }
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson =  {
  name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어 개발자'
      },
      {
        name: '제임스',
        title: '시니어 개발자'
      }
    ]
}
