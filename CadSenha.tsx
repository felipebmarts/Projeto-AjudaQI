import * as React from 'react';
import { TextInput } from 'react-native-paper';

const CadSenha = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label="Senha"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      style={{ width: '31%', marginTop: 15, marginBottom: 15, paddingHorizontal: 10}}

    />
  );
};

export default CadSenha;