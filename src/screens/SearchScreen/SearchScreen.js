import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "@env";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import MovieList from "../../components/MovieList";
import axios from "axios";
import { useNavigation } from '@react-navigation/native'

function SearchScreen() {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    const navigation = useNavigation();

    const handlePress = ({ title, id }) =>
        navigation.navigate("Movie", {
            id,
            title,
        });

    const clearSearch = () => {
        setLoading(false);
        setData([]);
        setSearchValue("");
    };

    const handleSearch = (value) => {
        const query = encodeURIComponent(value);

        if (value === "") return clearSearch();

        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2d1f249c74b4f27f99b66603bba798dc&query=${query}`).then((data) => {
            setData(data.data.results);
        });
        setLoading(false);
        setSearchValue(value);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar
                lightTheme
                inputStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white" }}
                containerStyle={{ backgroundColor: "white" }}
                placeholder="Type Here..."
                onChangeText={handleSearch}
                value={searchValue}
            />
            <MovieList
                onPress={handlePress}
                loading={loading}
                error={error}
                data={data}
                search={searchValue}
            ></MovieList>
        </SafeAreaView>
    );
}

export default SearchScreen;