import { StyleSheet, View} from 'react-native'
import { Link } from 'expo-router'

const DetectPose = () => {
  
    return (
    
    <View>
        <Link href="/detectOrb" style={styles.link}>Detect ORB</Link>
        <Link href="/" style={styles.link}>Go Home</Link>
    </View>
  )
}

export default DetectPose

const styles = StyleSheet.create({  
    
    link: {
        fontSize: 18,
        backgroundColor: '#007AFF',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 20,
        textAlign: 'center',
    },

     video: {
        width: '100%',
        height: 300,
        marginTop: 20,
    },
})