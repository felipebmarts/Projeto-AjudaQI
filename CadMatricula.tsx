import * as React from 'react';
import { TextInput } from 'react-native-paper';

const CadMatricula = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Número de matrícula"
      value={text}
      onChangeText={text => setText(text)}
      style={{width: '31%', marginTop: 15, paddingHorizontal: 10}}
    />
  );
};

export default CadMatricula;
