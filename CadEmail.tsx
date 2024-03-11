import * as React from 'react';
import { TextInput } from 'react-native-paper';

const CadEmail = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={{width: '31%', marginTop: 100, paddingHorizontal: 10}}
    />
  );
};

export default CadEmail;
