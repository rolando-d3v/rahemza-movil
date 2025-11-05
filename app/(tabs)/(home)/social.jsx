
import { Text, View, StyleSheet } from 'react-native';
import { Color } from '../../../constants/color'

export default function Social() {
   return (
     <View style={styles.container}>
         <Text className="text-white"  >Social</Text>     
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
