import { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

const useLoginHook = () => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  return { userEmail, setUserEmail, password, setPassword };
};

export default useLoginHook;
