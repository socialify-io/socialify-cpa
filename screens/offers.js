import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Offers() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Offers</Text>
      <View style={globalStyles.searchBox}>
        <SafeAreaView style={globalStyles.searchView}>
          <MaterialCommunityIcons
            name="magnify"
            size={34}
            color="#ccc"
            style={globalStyles.searchIcon}
          /> 
          <TextInput
            style={globalStyles.searchInput}
            onChangeText={() => {}}
            value={() => {}}
            placeholder="Search here"
            keyboardType="numeric"
          />
        </SafeAreaView>
        <SafeAreaView style={globalStyles.searchFiltersView}>
          <MaterialCommunityIcons
            name="tune-variant"
            size={34}
            color="#ccc"
            style={globalStyles.searchFiltersIcon}
          /> 
        </SafeAreaView>
      </View>
    </View>
  );
}
