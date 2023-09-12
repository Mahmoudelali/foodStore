import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';
import axios from 'axios';
const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = useState(false);
  
	const loginFields = [
	  {
		label: 'Email Address:',
		handler: setEmail,
		state: email,
	  },
	  {
		label: 'Password:',
		state: password,
		handler: setPassword,
		extraComponent: (
		  <Text className="uppercase font-light text-xs mb-4">forget Password ?</Text>
		),
	  },
	];
  
	const handleSignIn = () => {
	  setLoading(true);
  
	  // Create a data object to send in the request body
	  const data = {
		email: email,
		password: password,
	  };
  
	  // Make a POST request to your API
	  axios
		.post('http://127.0.0.1:8000/api/registration/accounts/login/', data)
		.then((response) => {
		  // Handle success, e.g., store user token, navigate to the next screen, etc.
		  setLoading(false);
		  console.log('Sign In successful:', response.data);
		
			 AsyncStorage.setItem('userToken', response.data.token);
			 navigation.navigate('Home');
		
		})
		.catch((error) => {
		  // Handle error, e.g., display an error message to the user
		  setLoading(false);
		  console.error('Sign In error:', error);
		});
	};
  
	return (
	  <ScrollView>
		<View className="bg-white p-5 m-3">
		  {loginFields.map(({ label, handler, extraComponent }, index) => (
			<LabelInput
			  key={index}
			  inputHandler={handler}
			  labelText={label}
			  placeholder={label}
			  extraComponent={extraComponent}
			/>
		  ))}
		  <View>
			<Button label={'Sign In'} onPress={handleSignIn} loading={loading} />
  
			<Text className="uppercase font-light text-xs mt-1">
			  Don't have an account? Sign up{' '}
			  <Button
				label={'Here'}
				textStyle={styles.labelStyles}
				buttonStyle={styles.buttonStyle}
				onPress={() => navigation.navigate('Register')}
			  />
			</Text>
		  </View>
		</View>
	  </ScrollView>
	);
  };

export default Login;

const styles = StyleSheet.create({
	labelStyles: {
		backgroundColor: 'transparent',
		color: '#a0a0a0',
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	letterSpacing: 1,
	buttonStyle: {
		backgroundColor: 'transparent',
		padding: 0,
		paddingTop: 5,
	},
});
