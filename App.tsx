import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';



export default function App() {

  
  const [código, setCódigo] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereço, setEndereço] = useState('');
  const [complemento, setComplemento] = useState('');


  const cadastro = () => {
    alert('Usuário Cadastrado com sucesso!')
  }
   

  

  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Informações de usuário</Text>


      <Text style={styles.titleCampos}>Crie um código:</Text>
      <TextInput placeholder='Código'style={styles.TextInput} onChangeText = {text=>setCódigo(text)}></TextInput>

      <Text style={styles.titleCampos}>RG:</Text>
      <TextInput placeholder='RG'style={styles.TextInput} onChangeText = {text=>setRg(text)}></TextInput>

      <Text style={styles.titleCampos}>CPF:</Text>
      <TextInputMask
      type={'cpf'}
      value='Cpf'
      placeholder='CPF'
      style={styles.TextInput}
      onChangeText = {text=>setCpf(text)}></TextInputMask>


      <Text style={styles.titleCampos}>Seu Nome:</Text>
      <TextInput placeholder='Nome'style={styles.TextInput} onChangeText = {text=>setNome(text)}></TextInput>
      <Text style={styles.titleCampos}>E-mail:</Text>
      <TextInput placeholder='E-mail'style={styles.TextInput} onChangeText = {text=>setEmail(text)}></TextInput>

      <Text style={styles.titleCampos}>Celular:</Text>
      <TextInputMask type={'cel-phone'}
       options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(11) ',
       }}
       value='Celeular'
       placeholder='Celular'
       style={styles.TextInput}
       onChangeText = {text=>setCelular(text)}></TextInputMask>

      <Text style={styles.titleCampos}>Telefone:</Text>
      <TextInputMask type={'cel-phone'}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(11) ',
      }}
      value='Telefone'
      placeholder='Telefone'
      style={styles.TextInput}
      onChangeText = {text=>setTelefone(text)}></TextInputMask>


      <Text style={styles.titleCampos}>Endereço:</Text>
      <TextInput placeholder='Endereço'style={styles.TextInput} onChangeText = {text=>setEndereço(text)}></TextInput>
      <Text style={styles.titleCampos}>Complemento:</Text>
      <TextInput placeholder='Complemento'style={styles.TextInput} onChangeText = {text=>setComplemento(text)}></TextInput>
      <Text style={styles.titleCampos}>Senha:</Text>
      <TextInput placeholder='Complemento'style={styles.TextInput} onChangeText = {text=>setComplemento(text)}></TextInput>

      <TouchableOpacity style={styles.botao} onPress={()=>cadastro()}>
        <Text style={{color:'black', textAlign: 'center', marginBottom: 1, fontWeight: 'bold'}}>CADASTRAR</Text>
      </TouchableOpacity>
      




      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 	'#000000',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 30,
    flexDirection: "row",
    marginBottom: 30
  },
  TextInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFAFA",
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: '#E0FFFF',
    borderWidth: 7,
  },
  titleCampos: {
    color: '#000000',
    marginLeft: 2,
    fontWeight: 'bold',
    fontSize: 16,
    flexDirection: "row",
    marginBottom: 2,
    width: '100%',
    
  },
  botao:{
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 5,
  }
});
