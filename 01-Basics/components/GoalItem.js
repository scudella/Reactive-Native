import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    letterSpacing: 2,
    fontSize: 16,
    padding: 8,
  },
});
