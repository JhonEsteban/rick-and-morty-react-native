import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, FlatList } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';

const Characters = ({ navigation }) => {
  const { characters } = useCharacters();
  const numColumns = 2;

  const renderItem = ({ item }) => {
    return <CharacterCard character={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(character) => character.id}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
});
