import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Flag from 'react-native-flags';
import { LineChart } from "react-native-gifted-charts";

const topCampaignsList = [
  {
    id: '1',
    title: 'Campaign 1',
    payout: '$6.00',
    epc: '$1.32',
    cvr: '16.21%',
  },
  {
    id: '2',
    title: 'Campaign 2',
    payout: '$6.00',
    epc: '$1.32',
    cvr: '16.21%',
  },
  {
    id: '3',
    title: 'Campaign 3',
    payout: '$6.00',
    epc: '$1.32',
    cvr: '16.21%',
  },
  {
    id: '4',
    title: 'Campaign 4',
    payout: '$6.00',
    epc: '$1.32',
    cvr: '16.21%',
  },
  {
    id: '5',
    title: 'Campaign 5',
    payout: '$6.00',
    epc: '$1.32',
    cvr: '16.21%',
  },
];

const data = [{ value: 15, label: '00' },
{ value: 30, label: '01' },
{ value: 25, label: '02' },
{ value: 32, label: '03' },
{ value: 12, label: '04' },
{ value: 11, label: '05' },
{ value: 24, label: '06' },
{ value: 60, label: '07' },
{ value: 12, label: '08' },
{ value: 96, label: '09' },
{ value: 45, label: '10' },
{ value: 86, label: '11' },
{ value: 27, label: '12' },
{ value: 75, label: '13' },
{ value: 98, label: '14' },
{ value: 26, label: '15' },
{ value: 43, label: '16' },
{ value: 121, label: '17' },
{ value: 42, label: '18' },
{ value: 59, label: '19' },
{ value: 85, label: '20' },
{ value: 34, label: '21' },
{ value: 23, label: '22' },
{ value: 9, label: '23' }
];

const ListItem = ({ id, title, payout, epc, cvr }) => {
  return (
    <View style={globalStyles.topCampaignsListItem}>
      <Image style={globalStyles.topCampaignsListItemImage} source={require('../assets/app-icon-placeholder.png')} />
      <View style={globalStyles.topCampaignsListItemDetails}>
        <Text style={globalStyles.topCampaignsListItemTitle}>{title}</Text>
        <SafeAreaView style={globalStyles.topCampaignsListItemDetailsDetails}>
          <View style={globalStyles.topCampaignsListItemDetailsTitles}>
            <Text style={globalStyles.topCampaignsListItemDetailTitle}>Payout: </Text>
            <Text style={globalStyles.topCampaignsListItemDetailTitle}>EPC: </Text>
            <Text style={globalStyles.topCampaignsListItemDetailTitle}>CVR: </Text>
          </View>
          <View style={globalStyles.topCampaignsListItemDetailsValues}>
            <Text style={globalStyles.topCampaignsListItemPayoutValue}>{payout}</Text>
            <Text style={globalStyles.topCampaignsListItemDetailValue}>{epc}</Text>
            <Text style={globalStyles.topCampaignsListItemDetailValue}>{cvr}</Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}


export default function Home() {
  return (
    <View style={globalStyles.container}>
      <SafeAreaView style={globalStyles.homeDailyStats}>
        <View style={globalStyles.homeDailyStatsRevenue}>
          <Text style={globalStyles.homeDailyStatsRevenueText}>$1,867.32</Text>
          <Text style={globalStyles.homeDailyStatsRevenueLabel}>Today's Revenue</Text>
        </View>
        <View style={globalStyles.verticleLine}></View>
        <View style={globalStyles.homeDailyStatsRank}>
          <Text style={globalStyles.homeDailyStatsOrdersText}>#12</Text>
          <Text style={globalStyles.homeDailyStatsOrdersLabel}>Today's Rank</Text>
        </View>
        <View style={globalStyles.verticleLine}></View>
        <View style={globalStyles.homeDailyStatsTeamCommissions}>
          <Text style={globalStyles.homeDailyStatsTeamCommissionsText}>$308.25</Text>
          <Text style={globalStyles.homeDailyStatsTeamCommissionsLabel}>Team Commissions</Text>
        </View>
      </SafeAreaView>
      <View style={globalStyles.topCampaigns}>
        <Text style={globalStyles.topCampaignsTitle}>Top Campaigns</Text>
        <FlatList
          data={topCampaignsList}
          horizontal={true}
          renderItem={({ item }) => <ListItem
            id={item.id}
            title={item.title}
            payout={item.payout}
            epc={item.epc}
            cvr={item.cvr}
          />}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <LineChart areaChart curved data={data} prefix={'$'} style={globalStyles.homeChart} /> */}
      <LineChart
        areaChart
        curved
        data={data}
        rotateLabel
        width={300}
        spacing={24}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripWidth: 2,
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                  {items[0].date}
                </Text>

                <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
}
