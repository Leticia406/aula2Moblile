import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container :{
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor:'#1f71ff',
        borderRadius: 10,
    },
    texto: {
        flex: 1,
        padding: 2,
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
    },
    botao: {
        height: 50,
        width: 100,
        backgroundColor: '#f82553',
        alignItems:'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    texto_botao: {
        fontSize: 30,
        color: '#fff'
    }
})