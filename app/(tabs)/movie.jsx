import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { Collapsible } from "@/components/ui/collapsible";
import ParallaxScrollView from "@/components/parallax-scroll-view";

// const img = require("@/assets/images/movie/corazon.jpg");
// const img = require("@/assets/images/movie/avatar.jpg");
// const img = require("@/assets/images/movie/cap4.jpg")
// const img = require("@/assets/images/movie/predator.jpg");
const img = require("@/assets/images/movie/titanic.jpg");
// const img = require("@/assets/images/movie/infinity_war.jpg");

const actors = [
  {
    id: 1,
    name: "K. Winslet",
    img: require("@/assets/images/actores/kate.jpg"),
  },
  {
    id: 2,
    name: "L. DiCaprio",
    img: require("@/assets/images/actores/leonardo.jpg"),
  },
  {
    id: 3,
    name: "K. Winslet",
    img: require("@/assets/images/actores/kate.jpg"),
  },
  {
    id: 4,
    name: "L. DiCaprio",
    img: require("@/assets/images/actores/leonardo.jpg"),
  },
  {
    id: 5,
    name: "K. Winslet",
    img: require("@/assets/images/actores/kate.jpg"),
  },
  {
    id: 6,
    name: "L. DiCaprio",
    img: require("@/assets/images/actores/leonardo.jpg"),
  },
];

export default function TabTwoScreen() {
  const [movie, setMovie] = useState({
    title: "Titanic",
    director: "James Cameron",
    duration: "195 min",
    year: "1997",
  });

  const handlePress = () => {
    console.log("Presionado");
  };

  const BUTTON_WIDTH = 126;
  const BUTTON_HEIGHT = 50;

  return (
    <ParallaxScrollView
      // color_content="#000c1b"
      // color_content="#10131a"
      // color_content="#1a1c1e"
      // color_content="#12233b"
      color_content="#0a0a0d"
      // color_content="#000"

      headerImage={
        <View style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            source={img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top left",
              contentFit: "cover",
            }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "rgba(0,0,0,0.5)",
            ]}
            // colors={["transparent", "rgba(0,0,0,0.9)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 0.8 }}
            style={{
              position: "absolute",
              // opacity: 0.9,
              height: "100%",
              width: "100%",
            }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "rgba(0,0,0,0.9)",
            ]}
            // colors={["transparent", "rgba(0,0,0,0.9)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1.05 }}
            style={{
              position: "absolute",
              opacity: 0.9,
              height: "100%",
              width: "100%",
            }}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              width: BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              top: "50%",
              left: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center", // Centra el texto dentro del botón
              alignItems: "center", // Centra el texto dentro del botón
              borderRadius: 8,
              marginTop: -(BUTTON_HEIGHT / 2),
              marginLeft: -(BUTTON_WIDTH / 2),
              flexDirection: "row",
              gap: 6,
              padding: 4,
              borderWidth: 1,
              borderColor: "#555",
            }}
            onPress={handlePress}
          >
            <AntDesign name="play-circle" size={32} color="white" />
            <Text style={{ fontSize: 13, fontWeight: "600", color: "white" }}>
              Ver Trailer
              {/* Watch Trailer */}
            </Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View
        style={{
          flexDirection: "row",
          // alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
          // width: "100%",
        }}
      >
        <View style={{ width: 100, position: "relative" }}>
          <Image
            source={img}
            // source={movie.image}
            style={{
              width: 120,
              height: 170,
              borderRadius: 6,
              borderWidth: 0.25,
              borderColor: "white",
              // shadowColor: "white",
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 1,
              // shadowRadius: 10,
              // elevation: 5,
            }}
            contentFit="cover"
          />
          <Text
            style={{
              color: "white",
              fontSize: 14,
              position: "absolute",
              top: 0,
              right: -60,
            }}
          >
            {movie.year}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",

            width: "65%",
          }}
        >
          <Text style={{ color: "white", fontSize: 30, padding: 0 }}>
            {movie.title}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Director: {movie.director}{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>{movie.duration}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              gap: 10,
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text className="text-black text-[13px] font-bold bg-white px-1 rounded-[6px]">
              Vistas
            </Text>
            <Text className="text-black text-[13px] font-bold bg-white px-1 rounded-[6px]">
              Like
            </Text>
            <Text className="text-black text-[13px] font-bold bg-white px-1 rounded-[6px]">
              Listas
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Collapsible title="Resumen del Película" color_text="white">
          <Text
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "justify",
              paddingRight: 20,
            }}
          >
            Jack es un joven artista que gana un pasaje para viajar a América en
            el Titanic, el transatlántico más grande y seguro jamás construido.
            A bordo del buque conoce a Rose, una chica de clase alta que viaja
            con su madre y su prometido Cal, un millonario engreído a quien solo
            interesa el prestigio de la familia de su prometida. Jack y Rose se
            enamoran a pesar de las trabas que ponen la madre de ella y Cal en
            su relación. Mientras, el lujoso transatlántico se acerca a un
            inmenso iceberg.{" "}
          </Text>
        </Collapsible>

        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          {["Actores", "Elenco", "Detalles"].map((tab, index) => (
            <TouchableOpacity key={index} style={{ marginRight: 20 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: tab === "Actores" ? "#fff" : "#aaa",
                }}
              >
                {tab}
              </Text>
              {tab === "Actores" && (
                <View
                  style={{
                    height: 3,
                    backgroundColor: "#bb86fc",
                    borderRadius: 2,
                    marginTop: 4,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {actors?.map((actor) => (
            <View
              key={actor.id}
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 80,
                gap: 4,
                marginHorizontal: 4,
              }}
            >
              <Image
                key={actor.id}
                // source={img}
                source={actor?.img}
                // source={{ uri: actor.img }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,

                  borderWidth: 2,
                  borderColor: "gray",
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 10,
                  textAlign: "center",
                  backgroundColor: "#ccc",
                  paddingHorizontal: 4,
                  borderRadius: 6,
                }}
              >
                {actor.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            {/* All Reviews */}
            Reseñas
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#bb86fc", fontWeight: "600" }}>
              Ver todo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Review card */}
        <View
          style={{
            // backgroundColor: "#255742",
            backgroundColor: "#1a3a2d",
            // backgroundColor: "#408967",
            // backgroundColor: "#2a2545",
            borderRadius: 12,
            padding: 16,
            marginBottom: 30,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Reseña de <Text style={{ color: "#bb86fc" }}>David</Text>
              </Text>
              <Text style={{ color: "#ff5252" }}>★★★☆☆</Text>
            </View>
            <Text style={{ marginLeft: "auto", color: "#aaa" }}>💬 5</Text>
          </View>

          {/* Body */}
          <Text
            className="text-[#ddd] leading-normal text-[12px] text-justify mt-2.5 "
            numberOfLines={4}
          >
            Hace menos de tres años, la película de Todd Phillips, de
            presupuesto medio pero gran éxito, &quot;Joker&quot;, apuntaba
            amenazadoramente hacia un futuro en el que las películas de
            superhéroes de todos los tamaños se volverían tan comunes en el cine
            moderno que ya no tendrían que ser películas de superhéroes en
            absoluto...
          </Text>

          <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={{ color: "#bb86fc", fontWeight: "600" }}>
              Leer mas →
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "#255742",
            backgroundColor: "#1a3a2d",
            // backgroundColor: "#408967",
            // backgroundColor: "#2a2545",
            borderRadius: 12,
            padding: 16,
            marginBottom: 30,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Reseña de <Text style={{ color: "#bb86fc" }}>David</Text>
              </Text>
              <Text style={{ color: "#ff5252" }}>★★★☆☆</Text>
            </View>
            <Text style={{ marginLeft: "auto", color: "#aaa" }}>💬 5</Text>
          </View>

          {/* Body */}
          <Text
            className="text-[#ddd] leading-normal text-[12px] text-justify mt-2.5 "
            numberOfLines={4}
          >
            Hace menos de tres años, la película de Todd Phillips, de
            presupuesto medio pero gran éxito, &quot;Joker&quot;, apuntaba
            amenazadoramente hacia un futuro en el que las películas de
            superhéroes de todos los tamaños se volverían tan comunes en el cine
            moderno que ya no tendrían que ser películas de superhéroes en
            absoluto...
          </Text>

          <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={{ color: "#bb86fc", fontWeight: "600" }}>
              Leer mas →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  blur_container: {
    marginTop: 300,
    // position: "absolute",
    // flex: 1,
    width: "100%",
    minHeight: "100%",
    // bottom: 0,
    // justifyContent: "center",
    // textAlign: "center",
    padding: 10,
    // margin: 16,
    overflow: "hidden",
    borderRadius: 16,
  },
  reactLogo: {
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  blur_div: {
    position: "absolute",
    bottom: 0,
    height: "65%",
    width: "100%",
    padding: 20,

    // textAlign: "center",
    // justifyContent: "center",
    overflow: "hidden",
    borderRadius: 30,
  },
  titleContainer: {
    color: "white",
    // alignItems: "center",
    // gap: 8,
  },
});
