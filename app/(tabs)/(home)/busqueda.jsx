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
import { fetchSearchMovies, fetchTrendingMovies } from "@/api/apimovie";
import { Link } from "expo-router";
import { Color } from "@/constants/color";

export default function Busqueda() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const movies = await fetchTrendingMovies();
  };

  const getSearchMovies = (value) => {
    if (value && value.length > 2) {
      setLoading(true);
      fetchSearchMovies({
        query: value,
        include_adult: "false",
        language: "es-mx",
        page: "1",
      }).then((data) => {
        setLoading(false);
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={getSearchMovies}
        placeholder="Buscar película..."
        placeholderTextColor={Color.text_muted}
        style={styles.input}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.resultsTitle}>Results</Text>

        <Link href="/movie/123" style={styles.linkText}>
          Movie
        </Link>

        <View>
          {results.map((item, index) => (
            <TouchableWithoutFeedback key={index}>
              <Link href="/movie/1222" style={styles.movieLink}>
                <View style={styles.movieItem}>
                  {item.poster_path && (
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w200${item?.poster_path}`,
                      }}
                      style={styles.poster}
                    />
                  )}
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieTitleTruncated}>
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
    backgroundColor: Color.background,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.text_primary,
    borderRadius: 8,
    padding: 10,
    color: Color.text_primary,
  },
  scrollContent: {
    paddingHorizontal: 2,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.text_primary,
    marginTop: 10,
  },
  linkText: {
    color: Color.primary_color,
    marginVertical: 5,
  },
  movieLink: {
    marginVertical: 10,
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
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.text_primary,
  },
  movieTitleTruncated: {
    color: Color.primary_color,
    marginLeft: 4,
  },
});
