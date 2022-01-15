import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, onPress } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onTermsAndConditionsPressed = () => {
        console.warn('onTermsAndConditionsPressed')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />
                <CustomButton text="Sign Up" onPress={onRegisterPressed} />
                <Text style={styles.text}>
                    By registering, you confirm that you accept our
                    {' '}
                    <Text style={styles.link} onPress={onTermsAndConditionsPressed}>Terms and Conditions</Text>
                </Text>
                <CustomButton text="Have an account? Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    }
})

export default SignUpScreen;
