import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (

    <ScrollView style={styles.container}>
    <Text style={styles.title}>
    Little Lemon Restaurant
      </Text>
      <Image
        style={styles.logo}
        source={require('../img/littleLemonLogo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require('../img/picture1.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 1'}
      />
      <Text style={styles.title}>
       Burger
      </Text>
      <Image
        style={styles.image}
        source={require('../img/Picture2.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 2'}
      />
      <Text style={styles.title}>
        Sandwhich
      </Text>
      <Image
        style={styles.image}
        source={require('../img/Picture3.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 3'}
      />
      <Text style={styles.title}>
        Veg Spring Role
      </Text>
      <Image
        style={styles.image}
        source={require('../img/Picture4.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 4'}
      />
      <Text style={styles.title}>
        Samosa
      </Text>
      <Image
        style={styles.image}
        source={require('../img/Picture5.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 5'}
      />
      <Text style={styles.title}>
        Idli
      </Text><Image
        style={styles.image}
        source={require('../img/Picture6.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 6'}
      />
      <Text style={styles.title}>
        Butter Paneer
      </Text><Image
        style={styles.image}
        source={require('../img/Picture7.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 7'}
      />
      <Text style={styles.title}>
        Dosa
      </Text><Image
        style={styles.image}
        source={require('../img/Picture8.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Food Picture 8'}
      />
      <Text style={styles.title}>
        South Indian Thali
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo : {
    height: 200,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: 'white',
  },
 
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
