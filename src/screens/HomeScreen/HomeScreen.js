import React, { useEffect } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import MovieSection from "../../components/MovieSection";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "../../components/Carousel";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fetchMovies, fetchTopRatedMovies } from "../../services/services";
import SearchScreen from "../SearchScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [topRated, setTopRated] = React.useState([]);

    const navigation = useNavigation();

    const handlePress = ({ title, id }) =>
        navigation.navigate("Movie", {
            id,
            title,
        });

    useEffect(() => {
        setLoading(true);
        fetchMovies().then((data) => {
            setData(data);
        });
        fetchTopRatedMovies().then((topRated) => {
            setTopRated(topRated);
        });
        setLoading(false);
    }, []);

    if (loading)
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="tomato" />
            </View>
        );
    if (error) return <Text>ERROR: {error}</Text>;

    return (
        <SafeAreaView>
            <ScrollView>
                <Carousel data={data} onPress={handlePress}></Carousel>
                <MovieSection
                    onPress={handlePress}
                    data={data}
                    title="Popular"
                ></MovieSection>
                <MovieSection
                    onPress={handlePress}
                    data={topRated}
                    title="Top rated movies"
                ></MovieSection>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        "tabBarActiveTintColor": "tomato",
                        "tabBarInactiveTintColor": "gray",
                        "tabBarLabelPosition": "below-icon",
                        "tabBarStyle": {
                            "position": 'absolute',
                        },
                    }}>
                        <Tab.Screen name="Search" component={SearchScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        padding: 10,
        textAlign: "center",
    },
});
