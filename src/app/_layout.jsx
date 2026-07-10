import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TextInput, TouchableOpacity } from "react-native";


export default function RootLayout() {
  return (
    <SafeAreaView className="bg-black">
      <View style={{ padding: 16 }}>
        <Text style={{ padding: 16 }}>Hello </Text>
        <TextInput placeholder="Enter your name" placeholderTextColor="#999" style={
          {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: "#999",
            padding: 10,
            marginTop: 12

          }
        }
         
        }></TextInput>
 <Text> hekki</Text>
 Opac
        <TouchableOpacity className="bg-red-500"style
          color:"black",
          backgroundColor:"red"
        }}
      
       
          onPress={() => alert("searching!")}>
 <Text>Hello this is a text kit</Text>
 
          <Text style={{
            color: "white",
            fontWeight: "bold",
          }}> Enter </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}