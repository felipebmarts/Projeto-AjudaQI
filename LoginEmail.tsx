import * as React from 'react';
import { TextInput } from 'react-native-paper';

const LoginEmail = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={{width: '80%', marginBottom: 15, paddingHorizontal: 10}}
    />
  );
};

export default LoginEmail;
