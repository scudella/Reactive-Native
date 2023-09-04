import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder='Your Course Goal'
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={() => {
                addGoalHandler(enteredGoalText);
                setEnteredGoalText('');
              }}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
