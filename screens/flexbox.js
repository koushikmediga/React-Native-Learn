import React from 'react';
import {StyleSheet , Text,View} from 'react-native';

export default function Flexbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>MI</Text>
            <Text style={styles.box2}>SRH</Text>
            <Text style={styles.box3}>CSK</Text>
            <Text style={styles.box4}>RCB</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40,  

    },
    box1: {
        backgroundColor: 'blue',
        padding:10,
        flex: 2,
        marginRight:10,
    },
    box2: {
        backgroundColor: 'orange',
        padding:20,
        flex:1,
    },
    box3: {
        backgroundColor: 'yellow',
        padding:30,
        flex:1,
    },
    box4 : {
        backgroundColor:'red',
        padding:40,
        flex:1,
    }

})