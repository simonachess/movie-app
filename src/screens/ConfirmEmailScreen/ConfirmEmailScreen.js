import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, onPress } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onResendPressed = () => {
        console.warn('onSignInPressed')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />
                <CustomButton text="Confirm" onPress={onConfirmPressed} />
                <CustomButton text="Back to Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY" />
                <CustomButton text="Resend code"
                    onPress={onResendPressed}
                    type="SECONDARY" />
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

export default ConfirmEmailScreen;
