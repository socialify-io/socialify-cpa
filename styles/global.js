import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingBottom: 10
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    minHeight: 60,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  searchInput: {
    fontSize: 20
  },
  searchBar: {
  },
  searchFiltersView: {
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    minWidth: 60,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 70,
  },
  homeDailyStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight: 70,
    marginBottom: 20
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#ccc',
  },
  homeDailyStatsRevenueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  homeDailyStatsOrdersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  homeDailyStatsTeamCommissionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  topCampaigns: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20
  },
  topCampaignsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    paddingBottom: 10
  },
  topCampaignsList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight: 120,
  },
  topCampaignsListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'left',
    minHeight: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    padding: 10
  },
  topCampaignsListItemDetailsDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  topCampaignsListItemImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  topCampaignsListItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    paddingBottom: 3
  },
  topCampaignsListItemDetailTitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'left',
    paddingBottom: 3
  },
  topCampaignsListItemPayoutValue: {
    fontSize: 14,
    color: '#39Ff3d',
    textAlign: 'right',
    paddingBottom: 3
  },
  topCampaignsListItemDetailValue: {
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    paddingBottom: 3
  },
  topCampaignsListItemDetailsValues: {
    paddingLeft: 50
  },
  recentActivityItemImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  homeChart: {
    minWidth: 100
  }
});