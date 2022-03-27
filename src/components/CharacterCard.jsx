import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CharacterCard = ({ character, navigation }) => {
  const { id, name, image } = character;

  const goToMoreDetails = () => {
    navigation.navigate('CharacterDetails', { characterId: id });
  };

  return (
    <TouchableOpacity onPress={goToMoreDetails}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 160,
    height: 160,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
});
