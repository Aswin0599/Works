import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CommonActions } from '@react-navigation/native';
import { Layout, Text, useStyleSheet } from '@ui-kitten/components';
import Illustrations from 'assets/illustrations';
import commonStyles from 'common/styles';
import SocialButton from 'components/SocialButton';
import Spacer from 'components/Spacer';
import StyledStatusBar from 'components/StyledStatusBar';
import React, { useState } from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('screen');

GoogleSignin.configure({
    webClientId: '108025289615-54idp9au9o1j3collro4ot9b295f50fg.apps.googleusercontent.com'
});

const Welcome = ({ navigation }) => {
    const commonStyle = useStyleSheet(commonStyles);

    const [isSigningIn, setIsSigningIn] = useState(false);

    const goHome = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: 'Home' }]
            })
        );
    };

    const onGoogleButtonPress = async () => {
        setIsSigningIn(true);
        // Get the users ID token
        try {
            const { idToken } = await GoogleSignin.signIn();
            if (idToken) {
                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                // Sign-in the user with the credential
                await auth().signInWithCredential(googleCredential);
                goHome();
            }
            setIsSigningIn(false);
        } catch (error) {
            setIsSigningIn(false);
        }
    };

    const onAppleButtonPress = async () => {
        setIsSigningIn(true);
        // Start the sign-in request
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
            });
            const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
            // Ensure Apple returned a user identityToken
            if (credentialState === appleAuth.State.AUTHORIZED && appleAuthRequestResponse?.identityToken) {
                // Create a Firebase credential from the response
                const { identityToken, nonce, fullName } = appleAuthRequestResponse;
                const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
                // Sign the user in with the credential
                await auth().signInWithCredential(appleCredential);
                // Set user's display name manually
                if (fullName.givenName) await auth().currentUser.updateProfile({ displayName: fullName.givenName });
                goHome();
            }
            setIsSigningIn(false);
        } catch (error) {
            setIsSigningIn(false);
        }
    };

    return (
        <Layout style={commonStyle.flex}>
            <StyledStatusBar />
            <SafeAreaView style={[commonStyle.flex, commonStyle.paddedContainer]}>
                <View style={commonStyle.flex}>
                    <Spacer />
                    <Text category={'h1'}>Kerdos</Text>
                    <Spacer />
                    <Text category={'h4'} appearance={'hint'}>
                        Simplify intraday trade calculations!
                    </Text>
                </View>
                <Illustrations.Calculator width={screenWidth} height={200} />
                <Spacer space={24} />
                <View>
                    <Text category={'h4'} appearance={'hint'}>
                        {isSigningIn ? 'Signing you in' : 'Sign in to get started!'}
                    </Text>
                    <Spacer />
                    <SocialButton onPress={onGoogleButtonPress} provider={'Google'} disabled={isSigningIn} />
                    {Platform.OS === 'ios' && (
                        <SocialButton onPress={onAppleButtonPress} provider={'Apple'} disabled={isSigningIn} />
                    )}
                </View>
            </SafeAreaView>
        </Layout>
    );
};

export default Welcome;