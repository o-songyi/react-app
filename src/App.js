import {useState, useRef} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs; //비구조화 할당을 통해 값 추출 
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs, //spread문법 = 불변성을 지킨다 => 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트 되었음을 감지할 수 있고 이에 따라 필요한 리렌더링을 진행
      [name]:value,
    })
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email
      }
      setUsers([...users,user]) //spread 연산자 사용 혹은
      setUsers(users.concat(user)); //concat 사용

      setInputs({
        username:'',
        email:''
      })
      nextId.current += 1;
  }

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
