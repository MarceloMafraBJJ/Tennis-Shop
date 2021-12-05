import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Button from '../../component/Button';
import Dot from '../../component/Dot/Index';
import Footer from '../../component/Footer';
import SizeButton from '../../component/SizeButton';

export default function Detail({ navigation }) {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nike Premium'
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles}
        resizeMode="cover"
        style={styles.image}
      />

      <View>

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}> R$ 149,00 </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}> Nike Premium </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>37</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textcontent}>
          <Text style={styles.textTitle}>
            Nike Premium
          </Text>
          <Text style={styles.textcontent}>
            O Nike Premium foi criado para auxiliar na redução de lesões e manter você na corrida. Mais espuma e melhorias nos detalhes da parte de cima oferecem uma sensação de segurança e amortecimento. Amarre os cadarços e sinta todo o potencial logo no começo da corrida.
          </Text>
          <Text style={styles.textList}>
            - categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            -materal: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  image: {
    width: '100%'
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textcontent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
});