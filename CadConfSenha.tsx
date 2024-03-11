import * as React from 'react';
import { TextInput } from 'react-native-paper';

const CadSenha = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label="Confirme sua senha"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      style={{ width: '31%', marginBottom: -55, paddingHorizontal: 10}}

    />
  );
};

export default CadSenha;