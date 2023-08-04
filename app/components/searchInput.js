import { TextInput, View } from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import {

    Feather,
  } from "@expo/vector-icons";
const SearchInput = () => {
return(
    <View className="flex-row bg-white p-[5%] mb-[2%] inset-shadow(2px 4px 8px 2px black)">
        <Feather name="search" size={20} color={"#13d0ca"} />
					<TextInput placeholder="Search Coupway.." className="color-gray w-[50%]" />
					<View className= "h-[100%] w-[1] bg-gray-300 ml-5"  />
					<EvilIcons name="location" size={24} color="#13d0ca" />
					<TextInput placeholder="Location" className="color-gray w-[23%]"  />
				  </View>
)
}
export default SearchInput