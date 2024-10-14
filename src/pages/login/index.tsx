import React, { useState } from "react";

import {
    Text, 
    View, 
    Image, 
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { style } from "./styles";
import Logo from "../../assets/logo.jpg"
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)


    async function getLogin(){
        try{
            setLoading(false)
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')

            }

            setTimeout(()=>{
                if(email == 'teste@gmail.com' && password == '1234'){
                    Alert.alert('Login realizado com sucesso!')
                }
                else{
                    Alert.alert('Usuário não encontrado!')
                }
                
                setLoading(false)
            },3000)

         

        } catch (error) {
            console.log(error)
        }
        
    }
    console.log(loading)
    return (
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta! </Text>

            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>USUARIO OU ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <AntDesign
                        name='user'
                        size= {20}
                        color={themas.colors.gray}
                    />
                </View>                
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size= {20}
                        color={themas.colors.gray}
                    />
                </View>  

            </View>  

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'#FFFF'} size={"small"} />
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text> 
        </View>
    )
}