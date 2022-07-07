import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes, paddingSizes} from '../../utils/sizes'

export const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.titleContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>What would u like to add?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onChangeText={setSubject}
            // onSubmitEditing={({ nativeEvent }) => {
            //   setSubject(nativeEvent.Text);
            // }}
          />
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: paddingSizes.xxl,
  },
  titleContainer: {
    flex: 1,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: paddingSizes.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
