import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailSectionThree = () => {
  const amenitiesData = [
    {
      category: 'Activities',
      icon: 'bicycle',
      items: ['Swimming pool', 'Spa', 'Kids play area', 'Gym'],
    },
    {
      category: 'Services',
      icon: 'bell',
      items: ['Dry Cleaning', 'Room Service', 'Laundry facilities', 'Ironing Service', 'Lift'],
    },
    {
      category: 'Payment Method',
      icon: 'credit-card',
      items: ['Credit card(Visa Master card)', 'Cash', 'Debit Card'],
    },
    {
      category: 'Safety & Security',
      icon: 'shield',
      items: ['Doctor on Call'],
    },
    {
      category: 'Staff Language',
      icon: 'volume-up',
      items: ['English', 'Hindi'],
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {amenitiesData.map((amenity, index) => (
        <View key={index} style={[styles.amenityContainer, { backgroundColor: '#f0f0f0' }]}>
          <Text style={styles.amenityHeading}>{amenity.category}</Text>
          <View style={styles.cardContent}>
            <Icon name={amenity.icon} size={50} style={styles.amenityIcon} />
            {amenity.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.amenityContent}>
                <Icon name="check-circle" size={25} style={{ color: 'green' }} />
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  amenityContainer: {
    flex: 1,
    width: 250,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden', 
  },
  amenityHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  amenityIcon: {
    fontSize: 60,
    color: '#333',
    marginBottom: 20,
  },
  amenityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default DetailSectionThree;
