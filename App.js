import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  const handleCadastroPress = () => {
    // Implemente a ação desejada ao clicar no botão "Cadastrar"
    console.log('Botão Cadastrar pressionado');
  };

  const handleEsqueciSenhaPress = () => {
    // Implemente a ação desejada ao clicar no texto "Esqueci a senha"
    console.log('Texto "Esqueci a senha" pressionado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#e0dede' }]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.inputSenha, { backgroundColor: '#e0dede' }]}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#573b8a'}]}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.circle} onPress={handleCadastroPress}>
          <Text style={styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleEsqueciSenhaPress}>
        <Text style={styles.esqueciSenhaText}>Esqueci a senha</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b45',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#fff',
  },
  input: {
    width: '70%',
    height: 45,
    borderColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 0.7,
  },
  inputSenha: {
    width: '70%',
    height: 45,
    borderColor: '#fff',
    borderRadius: 8,
    marginBottom: 35,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 0.7,
  },
  button: {
    width: '65%',
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  circleContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  circle: {
    width: 1100,
    height: 1100,
    backgroundColor: '#1e1e1e',
    borderRadius: 850,
    alignItems: 'center',
    bottom: -1000,
    justifyContent: 'center',
  },
  cadastrarText: {
    fontSize: 30,
    color: '#533c8b',
    fontWeight: 'bold',
    marginTop: -1000,
  },
  esqueciSenhaText: {
    fontSize: 16,
    height: 100,
    color: '#fff',
    opacity: 0.3,
    marginTop: 15,
  },
});
