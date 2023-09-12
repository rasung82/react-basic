import {useImmer} from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const changeMentorName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요 ?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요  ?`);
    updatePerson(person => {
      const mentor = person.mentors.find(m => m.name === prev);
      mentor.name = current;
    })
  };

  const addMentor = () => {
    const name = prompt(`멘토의 이름은 ?`);
    const title = prompt(`멘토의 타이들은 ?`);
    updatePerson(person => {
      person.mentors.push({name, title})
    })
  };

  const removeMentor = () => {
    const name = prompt(`누구를 삭제하고 싶은가요 ?`);
    updatePerson(person => {
      const index = person.mentors.findIndex(m => m.name === name);
      person.mentors.splice(index,1);
    })
  };
  
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 : </p>
      <ul>
        {person.mentors.map((mentor,index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentorName}>멘토의 이름을 바꾸기</button>
      <button onClick={addMentor}>멘토 추가</button>
      <button onClick={removeMentor}>멘토 삭제</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [{
    name: '밥',
    title: '시니어개발자'
  }, {
    name: '제임스',
    title: '시니어개발자'
  }]
}

