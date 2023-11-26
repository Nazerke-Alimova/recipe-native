import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import IconSearch from "react-native-vector-icons/AntDesign";
const InputRecipe = ({inputText, setInputText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search any recipe"
        placeholderTextColor='gray'
        value={inputText}
        onChangeText={(newText)=>setInputText(newText)}
        style={styles.inputRecipe}
      ></TextInput>
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <IconSearch
            name="search1"
            size={25}
            color='gray'
          ></IconSearch>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputRecipe;
const styles = StyleSheet.create({
  inputContainer:{
    marginTop:20,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 6,
  },
  inputRecipe: {
    flex: 1,
    fontSize: 17,
    marginBottom: 1,
    paddingLeft: 10,
    letterSpacing: 1,
  },
  searchButton: {
    backgroundColor: 'white',
    borderRadius: 999,
    padding: 8,
  }
});
