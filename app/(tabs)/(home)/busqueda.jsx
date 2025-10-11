import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { fetchSearchMovies, fetchTrendingMovies } from "../../../api/apimovie";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Color } from "../../../constants/color";

export default function Busqueda() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const movies = await fetchTrendingMovies();
    console.log(movies);
    // setResults(movies.results);
  };

  const getSearchMovies = (value) => {
    if (value && value.length > 2) {
      setLoading(true);
      fetchSearchMovies({
        query: value,
        include_adult: "false",
        language: "es-mx",
        // language: "es-ES",
        // language: "en-US",
        page: "1",
      }).then((data) => {
        setLoading(false);
        console.log("go", data);
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setLoading(false);
      setResults([]);
    }

    // const movies = await fetchSearchMovies();
    // console.log(movies);
    console.log(value);
    // setResults(movies.results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={getSearchMovies}
        placeholder="Buscar película..."
        style={styles.input}
        // value={query}
      />
     

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 2 }}
        className="space-y-3"
        // contentContainerStyle={styles.container}
      >
        <Text className="text-2xl font-bold">Results</Text>

        <Link href="/movie/123">Movie</Link>

        <View>
          {results.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}

              // onPress={()=> navigation.push('movie', item)}
            >
              <Link href={`/movie/1222`} style={{ marginVertical: 10 }}>
                {/* <Link href={`/movie/${item.id}`}> */}
                <View style={styles.movieItem}>
                  {item.poster_path && (
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w200${item?.poster_path}`,
                      }}
                      style={styles.poster}
                    />
                  )}
                  <Text style={styles.title}>{item.title}</Text>
                  <Text className="text-green-500  ml-1">
                    {item?.title.length > 15
                      ? item?.title.slice(0, 15) + "..."
                      : item?.title}
                  </Text>
                </View>
              </Link>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.azul_oscuro,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 10,
    color: "#fff",
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  poster: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
