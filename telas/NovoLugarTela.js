import { 
  Button,
  ScrollView,
  StyleSheet, 
  Text, 
  TextInput,
  View
} from 'react-native'

import {
  React,
  useState
} from 'react'

import Cores from '../constantes/Cores'

//single source of truth
const NovoLugarTela = (props) => { 
  const [novoLugar, setNovoLugar] = useState('');

  const novoLugarAlterado = (texto) =>{
    setNovoLugar(texto);
  }

  const adicionarNovoLugar = () =>{
    console.log(`Adicionando: ${novoLugar}`)
  }

  return ( 
      <ScrollView> 
          <View style={styles.form}> 
              <Text style={styles.titulo}>Novo lugar</Text> 
              <TextInput 
                style={styles.textInput}
                onChangeText={novoLugarAlterado}
                value={novoLugar}
              /> 
              <Button 
                  title="Salvar Lugar" 
                  color={Cores.primary} 
                  onPress={adicionarNovoLugar} 
              /> 
          </View> 
      </ScrollView> 
  ) 
}; 

export default NovoLugarTela

const styles = StyleSheet.create({
  form:{
    margin: 40,
  },
  titulo:{
    fontSize: 18,
    marginBottom: 8
  },
  textInput:{
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom:8,
    paddingVertical: 12,
    paddingHorizontal: 8
  }
})