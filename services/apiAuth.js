import axios from './axios';
import * as SecureStore from 'expo-secure-store';

export async function login(loginCredentials) {
  try {
    const response = await axios.post('/users/login', {
      email: loginCredentials.email,
      password: loginCredentials.password,
    });

    // Extract token from response
    const token = response.data.token;

    // Store token in Expo SecureStore
    await SecureStore.setItemAsync('accessToken', token);

    return response;
  } catch (err) {
    console.log(err);
  }
}
