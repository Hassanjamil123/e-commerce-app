import React from 'react';
import { FlatList, Button, Platform, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';



const UserProductsScreen = props => {
  const products = useSelector(state => state.products.userProducts)

  const dispatch = useDispatch();
  console.log(products)

  return (
    <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => 
            <ProductItem 
                image={itemData.item.imageUrl} 
                title={itemData.item.title} 
                price={itemData.item.price}
                onViewDetail={() => {
                   
                }}
            >
            <Button color={Colors.primary} title="Edit" onPress={() => {
               props.navigation.navigate('EditProduct', {productId: itemData.item.id})
            }} />
            <Button color={Colors.primary} title="Delete" onPress={() => {
              dispatch(productsActions.deleteProduct(itemData.item.id))
            }} />
            </ProductItem>
            }
    />
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'arrow-back' : 'arrow-back'}
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProduct')
          }}
        />
      </HeaderButtons>
    )
  };
};

export default UserProductsScreen;