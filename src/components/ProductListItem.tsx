import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';

const product = products[1];
const ProductListItem = ({ product }) =>{ //create function set variable props as "{product}" untuk tarik semua list dari assets/data/produsts.ts
  //console.log(product);
  return(
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>RM{product.price}</Text>
    </View>
  );
};

export default ProductListItem; //function call to other page

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }

});
