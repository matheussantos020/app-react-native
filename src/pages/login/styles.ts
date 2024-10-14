import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }, 
    boxTop:{
        height:Dimensions.get('window').height/3,
        width: '100%',
        
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    boxMid:{
        height:Dimensions.get('window').height/4,
        width: '100%',
        //backgroundColor: 'green',
        paddingHorizontal:38

    }, 
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width: '100%',
       // backgroundColor: 'blue',
        alignItems:'center',
        //justifyContent:'center'

    },

    logo:{
        width:80,
        height:80
    },
    text:{
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 18
    }, 
    titleInput:{
        marginLeft: 5,
        color: themas.colors.gray, 
        marginTop:20
    },

    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,

        marginTop:10,
        flexDirection:'row',
        borderRadius: 40,
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,

    },

    input:{
        height:'100%',
        width: '90%',
        borderRadius: 40

    },
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themas.colors.primary,
        borderRadius:40,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,
        




    },

    textButton:{
        fontSize:16,
        color: '#FFFF',
        fontWeight:'bold'
    },

    textBottom:{
        fontSize:16,
        color: themas.colors.gray,
        
    }
})