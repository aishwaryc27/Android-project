import React from 'react';
import { View, Text, Button } from 'react-native';


function AdminScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Admin Page!</Text>
      <Button
        title="number of company"
        onPress={() => navigation.navigate('Settings')}
      />

<Button
        title="employee details"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="number of user"
        onPress={() => navigation.navigate('Settings')}
      />

    </View>
  );
}

export default AdminScreen;
