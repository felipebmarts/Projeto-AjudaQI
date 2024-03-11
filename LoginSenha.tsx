import * as React from 'react';
import { TextInput } from 'react-native-paper';

const LoginSenha = () => {
  const [text, setText] = React.useState(" ");

  return (
    <TextInput
      label="Senha"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      style={{ width: '80%', marginBottom: 35, paddingHorizontal: 10}}

    />
  );
};

export default LoginSenha;