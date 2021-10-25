import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#DDD' }]}>*</Text>
                    <Text style={[styles.text, { color: '#DDD' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color='#000'


                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes img={require('../../assets/t1.png')} cost='R$249,99' onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max 2.0 (Edição Limitada)
                    </Shoes>
                    <Shoes img={require('../../assets/t2.png')} cost='R$149,00' onClick={() => navigation.navigate('Detail')}>
                        Nike Premium
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes img={require('../../assets/t3.png')} cost='R$429,99' onClick={() => alert('CLICOU!!')}>
                        Adidas Pro 3.2
                    </Shoes>
                    <Shoes img={require('../../assets/t4.png')} cost='R$356,00' onClick={() => alert('CLICOU!!')}>
                        Adidas Ultimate 2
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes img={require('../../assets/t5.png')} cost='R$278,99' onClick={() => alert('CLICOU!!')}>
                        Adidas Premium (Edição Limitada)
                    </Shoes>
                    <Shoes img={require('../../assets/t6.png')} cost='R$159,99' onClick={() => alert('CLICOU!!')}>
                        Adidas Fox
                    </Shoes>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#FFF"
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: "100%"
    },
    textcontainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2
    }
})