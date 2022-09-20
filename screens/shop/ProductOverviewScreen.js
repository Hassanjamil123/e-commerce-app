import { FlatList, View, Text, Platform, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
 import HeaderButton from '../../components/UI/HeaderButton'
 import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'; 

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();
  return (
    <View>
        <View>
        <TouchableOpacity style={styles.userView} onPress={() => {
            props.navigation.navigate('Users')
        }}>
            <Text style={styles.userText}>
                For User Admin
            </Text>
            <MaterialIcons name="admin-panel-settings" size={24} color="black" />
        </TouchableOpacity>
        </View>
    <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => 
            <ProductItem 
                image={itemData.item.imageUrl} 
                title={itemData.item.title} 
                price={itemData.item.price}
            >
            <Button color={Colors.primary} title="View details" onPress={() => {
                    props.navigation.navigate('ProductDetail', {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    })
                }} />
            <Button color={Colors.primary} title="Add to Cart" onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item))
                }} />
            </ProductItem>
            }
    />
    </View>
  )
}


ProductOverviewScreen.navigationOptions = navData => {
    return{
     headerTitle: 'All Products',
     headerRight: props => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Cart" iconName='ios-cart' onPress={() => navData.navigation.navigate('Cart')} />
        </HeaderButtons>
      ),
     headerLeft: props => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Orders" iconName='ios-reorder-three-sharp' onPress={() => navData.navigation.navigate('Orders')} />
        </HeaderButtons>
     ), 
     }
};


const styles = StyleSheet.create({
    userView: {
        margin: 20,
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        height: 70,
        borderRadius: 10,
        position: 'relative',
        justifyContent: 'space-between',
        padding: 25,
    },
    userText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'black'
    }
})

export default ProductOverviewScreen;


{/* <TouchableOpacity style={{padding: 12}} onPress={() => {}}>
        <View style={{width: '100%'}}>
            <Ionicons name="ios-cart" size={24} color={Colors.primary} /> 
        </View>
        </TouchableOpacity> */}