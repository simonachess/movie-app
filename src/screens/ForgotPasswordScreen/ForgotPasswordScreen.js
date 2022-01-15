import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, onPress } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [username, setUserName] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('ResetPassword');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUserName}
                />
                <CustomButton text="Send" onPress={onSendPressed} />
                <CustomButton text="Back to Sign In"
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

export default ForgotPasswordScreen;
