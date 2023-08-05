import { TextInput, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const SearchInput = () => {
	return (
		<View>
			<View className="flex-row bg-white mb-2  mx-auto">
				<View className="basis-3/5">
					<Feather
						name="search"
						size={20}
						color={'#13d0ca'}
						style={style.searchIcons}
					/>
					<TextInput
						placeholder="Search Coupway.."
						className="color-gray p-4 relative pl-7"
					/>
				</View>

				<View className="h-[100%] w-[1] bg-gray-300" />
				<View className="basis-2/5">
					<EvilIcons
						name="location"
						size={24}
						color="#13d0ca"
						style={style.searchIcons}
					/>
					<TextInput
						style={style.searchIcons}
						placeholder="Location"
						className="color-gray relative pl-7"
					/>
				</View>
			</View>
		</View>
	);
};
const style = StyleSheet.create({
	searchIcons: {
		position: 'absolute',
		top: 7,
		left: 5,
	},
});
export default SearchInput;
