import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Colors from '../constants/Colors'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrderScreen from '../screens/shop/OrderScreen'
import UserProductScreen from '../screens/user/UserProductScreen'
import EditProductScreen from '../screens/user/EditProductScreen'




const ShopNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    Orders: OrderScreen,
    Users: UserProductScreen,
    EditProduct: EditProductScreen
}, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
)



export default createAppContainer(ShopNavigator)