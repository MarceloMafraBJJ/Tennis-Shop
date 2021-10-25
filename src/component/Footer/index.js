import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}> VOCÊ TAMBÉM PODE GOSTAR: </Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/t1.png')} cost='R$ 249,99'>
                            Nike air Max 2.0 (Edição Limitada)
                    </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/t4.png')} cost='R$ 356,00'>
                            Nike Premium
                    </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/t3.png')} cost='R$ 429,99'>
                            Adidas Pro 3.2
                    </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
});