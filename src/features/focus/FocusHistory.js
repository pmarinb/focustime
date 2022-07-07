import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={styles.droidSafeArea}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    //backgroundColor: npLBlue,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  historyItem: (status) => ({
    color: status > 1 ? 'red' : '#58eb34',
    fonstSize: 16,
  }),
  title: {
    color: 'white',
    fonstSize: 24,
  },
  clearContainer: {
    alignItems: 'center',
    padding: 16,
  },
});
