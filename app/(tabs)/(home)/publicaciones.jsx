
import { Text, View, StyleSheet } from 'react-native';
import { Color } from '../../../constants/color'

export default function Publicaciones() {
   return (
     <View style={styles.container}>
         <Text>Publicaciones</Text>     
     </View>
   )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.azul_oscuro,
    },
});
