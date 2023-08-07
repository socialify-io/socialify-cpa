import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Stats() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Stats</Text>
    </View>
  );
}
