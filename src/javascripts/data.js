function getData() {
  return {
    theme: 'dark',
    user: {
      id: 1,
      name: 'nabeliwo',
      thumb_path: '/img/favicon.png'
    },
    memo: {
      paths: [
        {
          id: 1,
          name: 'Project'
        },
        {
          id: 2,
          name: 'memore'
        },
        {
          id: 3,
          name: 'design'
        }
      ],
      tags: [
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'React'
        },
        {
          id: 3,
          name: 'GraphQL'
        }
      ],
      title: 'これははじめての投稿テストです',
      content: 'いよっしゃあああああああああああああああああああああああ',
      created_at: '2016/10/10 22:32:32',
      updated_at: '2016/10/12 20:12:50'
    }
  };
}

export default getData;
