import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import macbook from '../../assets/image/brimstone.jpg';

function Product(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={styles.productName}>New Macbook Pro 2019</Text>
        <Text style={styles.productPrice}>Rp 25.000.000,-</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    marginTop: 14,
    color: '#F2994A',
    fontWeight: 'bold',
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
