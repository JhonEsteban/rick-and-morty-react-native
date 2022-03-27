import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text, Image, Button, View } from 'react-native';

import useSingleCharacter from '../hooks/useSingleCharacter';

const CharacterDetails = ({ route, navigation }) => {
  const { characterId } = route.params;
  const { character } = useSingleCharacter(characterId);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>

      <Image source={{ uri: character.image }} style={styles.image} />

      <Button title='Regresar' color='green' onPress={handleGoBack} />

      <View style={styles.details}>
        <Text style={styles.text}>Especie: {character.species}</Text>
        <Text style={styles.text}>Genero: {character.gender} </Text>
      </View>

      <Button title='Agregar a favoritos' color='blue' />
    </SafeAreaView>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    marginVertical: 10,
    fontSize: 24,
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
  },
  details: {
    marginVertical: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 4,
    marginBottom: 14,
  },
});
