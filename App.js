import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import LoginEmail from './LoginEmail';
import LoginSenha from './LoginSenha';
import CadEmail from './CadEmail';
import CadSenha from './CadSenha';
import CadConfSenha from './CadConfSenha';
import CadMatricula from './CadMatricula';

export default function App() {
  const [circleAnimation] = useState(new Animated.Value(0));
  const [isCircleUp, setIsCircleUp] = useState(false);
  const [selectedFaculdade, setSelectedFaculdade] = useState('');
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoIncrement) {
        setIsCircleUp(!isCircleUp);
        setAutoIncrement(false);
      }
    }, 5000); // Mudar a cada 5 segundos

    return () => clearInterval(interval);
  }, [autoIncrement, isCircleUp]);

  const handleCadastroPress = () => {
    if (!isCircleUp) {
      Animated.timing(circleAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setIsCircleUp(true);
    } else {
      // Se o círculo já estiver para cima, deve permanecer lá
      Animated.timing(circleAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleLoginPress = () => {
    if (isCircleUp) {
      Animated.timing(circleAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setIsCircleUp(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.title}>Login</Text>
      </TouchableOpacity>

      <LoginEmail />
      <LoginSenha />

      <TouchableOpacity style={[styles.button, { backgroundColor: '#573b8a' }]}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      

      <Text style={styles.esqueciSenhaText}>Esqueci a senha</Text>

      <View style={styles.faculdadeContainer}>
        <Picker
          selectedValue={selectedFaculdade}
          style={[styles.faculdadePicker, { marginTop: -208 }]}
          onValueChange={(itemValue, itemIndex) => setSelectedFaculdade(itemValue)}
        >
          <Picker.Item label="Selecione a faculdade" value="" />
          <Picker.Item label="Faculdade A" value="Faculdade A" />
          <Picker.Item label="Faculdade B" value="Faculdade B" />
          <Picker.Item label="Faculdade C" value="Faculdade C" />
          <Picker.Item label="Faculdade D" value="Faculdade D" />
        </Picker>
      </View>

      <Animated.View style={[styles.circleContainer, { transform: [{ translateY: circleAnimation.interpolate({ inputRange: [0, 1], outputRange: [-50, -600] }) }] }]}>
        <TouchableOpacity
          style={styles.circle}
          onPress={handleCadastroPress}
          activeOpacity={1}
        >
          <Text style={styles.cadastrarText}>Cadastrar</Text>

          <CadEmail />
          <CadMatricula />
          <CadSenha />
          <CadConfSenha />

          <View style={styles.faculdadeContainerCad}>
            <Picker
              selectedValue={selectedFaculdade}
              style={[styles.faculdadePickerCad, { marginTop: 50 }]}
              onValueChange={(itemValue, itemIndex) => setSelectedFaculdade(itemValue)}
            >
              <Picker.Item label="Selecione a faculdade" value="" />
              <Picker.Item label="Faculdade A" value="Faculdade A" />
              <Picker.Item label="Faculdade B" value="Faculdade B" />
              <Picker.Item label="Faculdade C" value="Faculdade C" />
              <Picker.Item label="Faculdade D" value="Faculdade D" />
            </Picker>
          </View>
          <TouchableOpacity
            style={[styles.buttonCad, { backgroundColor: '#573b8a' }]}
            onPress={() => setAutoIncrement(true)}
          >
            <Text style={styles.buttonTextCad}>Cadastrar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>

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
    marginBottom: 150,
    color: '#fff',
  },
  button: {
    width: '65%',
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: -800,
  },
  buttonCad: {
    width: '25%',
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: -50,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTextCad: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  circleContainer: {
    width: '100%',
    alignItems: 'center',
    bottom: -1020,
    marginTop: -700,
  },
  circle: {
    width: 910,
    height: 910,
    backgroundColor: '#1e1e1e',
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  cadastrarText: {
    fontSize: 30,
    color: '#533c8b',
    fontWeight: 'bold',
    marginTop: -380,
  },
  esqueciSenhaText: {
    fontSize: 16,
    height: 100,
    color: '#fff',
    opacity: 0.3,
    marginTop: 600,
    bottom: -220,
  },
  faculdadeContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  faculdadePicker: {
    width: '80%',
    height: 50,
    backgroundColor: '#e0dede',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 0.8,
  },
  faculdadePickerCad: {
    width: '31%',
    height: 50,
    backgroundColor: '#342e38',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
    opacity: 1.0,
  },
  faculdadeContainerCad: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
});
