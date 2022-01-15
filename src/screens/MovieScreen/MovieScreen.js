import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { Tile } from "react-native-elements";
import axios from "axios";

function MovieScreen({ route }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = route.params;

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2d1f249c74b4f27f99b66603bba798dc`).then((movieDetails) => {
            setMovieDetails(movieDetails.data);
        });
        setLoading(false);
    }, []);


    if (loading)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="tomato" />
            </View>
        );

    if (error) return <Text>ERROR: {error}</Text>;

    return (
        <View>
            <Tile
                imageSrc={{ uri: `http://image.tmdb.org/t/p/w780${movieDetails.poster_path}` }}
                title={movieDetails.title}
                featured
                caption={movieDetails.title}
            />
            <View style={{ flexDirection: "row", padding: 20, }}>
                <View style={{ flex: 1 }}>
                    <Text>{movieDetails.overview}</Text>
                </View>
            </View>
        </View>
    );
}

export default MovieScreen;