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
import { fetchSearchMovies, fetchTrendingMovies } from "../api/apimovie";
import { useNavigation } from "@react-navigation/native";

export default function App() {
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
      {/* <Button title="Buscar" onPress={ () => searchMovies()} /> */}

      {/* <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
            <Text className="text-green-900  ml-1">
              {item?.title.length > 15
                ? item?.title.slice(0, 15) + "..."
                : item?.title}
            </Text>
          </View>
        )}
      /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-y-3"
        // contentContainerStyle={styles.container}
      >
        <Text className="text-2xl font-bold">Results</Text>

        <View>
          {results.map((item, index) => (
            <TouchableWithoutFeedback key={index}
            onPress={()=> navigation.push('tovie', item)}
            >
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
                <Text className="text-green-900  ml-1">
                  {item?.title.length > 15
                    ? item?.title.slice(0, 15) + "..."
                    : item?.title}
                </Text>
              </View>
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
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  poster: {
    width: 60,
    height: 90,
    marginRight: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
