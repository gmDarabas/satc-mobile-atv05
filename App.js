import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform  } from 'react-native';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const [inputNumber, setInputNumber] = useState('');

  const handleVerify = () => {
    const userNumber = parseInt(inputNumber);
    
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      Alert.alert('Erro', 'Por favor, insira um número válido entre 0 e 10.');
      return;
    }

    const randomNumber = getRandomInt(0, 10);

    if (userNumber === randomNumber) {
      showAlert(`Parabéns! Você acertou. O número era ${randomNumber}.`);
    } else {
      showAlert(`Você errou. O número era ${randomNumber}.`);
    }
  };

  const showAlert = (message) => {
    const isWeb = Platform.OS === 'web';
    
    if (isWeb) {
      window.confirm(message)
    } else {
      Alert.alert(message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o número</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número de 0 a 10"
        keyboardType="numeric"
        onChangeText={setInputNumber}
        value={inputNumber}
      />
      <Button title="Verificar" onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
