import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, onPress } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text>Sign In Screen</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY" />
                <CustomButton text="Don't have an account? Create a new account"
                    onPress={onSignUpPressed}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})

export default SignInScreen;
