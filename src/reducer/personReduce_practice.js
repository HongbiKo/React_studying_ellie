export default function personReducer_practice(person, action) {
  switch (action.type) {
    case "updated": {
      const { current, name } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === current) {
            return { ...mentor, name: name };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션타입입니다, : ${action.type}`);
    }
  }
}
