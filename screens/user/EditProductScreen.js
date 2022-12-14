import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';


const EditProductScreen = props => {

  const prodId = props.navigation.getParam('productId');
  const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId))

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput 
          placeholder="title" 
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput 
          placeholder="Image" 
          style={styles.input} 
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          />
        </View>
        { editedProduct ? null :
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput 
          placeholder="price" 
          style={styles.input} 
          value={price}
          onChangeText={text => setPrice(text)}
          />
        </View>
        }
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput 
          placeholder="description" 
          style={styles.input} 
          value={description}
          onChangeText={text => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  )
}

EditProductScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={() => {

          }}
        />
      </HeaderButtons>
    ),
  }
}


const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  }, 
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
    //fontSize: 16
  }, 
  input: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
})

export default EditProductScreen