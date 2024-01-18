import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailSectionTwo = () => {
  const icons = ['wifi', 'tint', 'snowflake-o', 'bell']; // Updated icon names
  const mainHighlightsText =
    "Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bad one supposing breakfast day fulfilled off depending questions";
  const otherText =
    "Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed fally right aware if oh truth. Large above be means. Dashwood does provide stronger is.";
  const advantages = [
    "Every hotel staff to have Proper PPT kit for COVID-19",
    "Every staff member wears face masks and gloves at all service times.",
    "Hotel staff ensures to maintain social distancing at all times.",
    "The hotel has in-Room Dining options available.",
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.sectionAbout}>
        <Text style={styles.aboutHeading}>About This Hotel</Text>
        <Text style={styles.mainHighlightsHeading}>Main Highlights</Text>
        <View style={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <View key={index} style={styles.iconContainer}>
              <Icon
                name={icon}
                size={25}
                style={styles.icon}
              />
            </View>
          ))}
        </View>
        <Text style={styles.text}>{mainHighlightsText}</Text>
        <Text style={styles.text}>{otherText}</Text>
        <Text style={styles.advantagesHeading}>Advantages</Text>
        {advantages.map((advantage, index) => (
          <View key={index} style={styles.advantages}>
            <Icon
              name="check-circle"
              size={25}
              style={{ color: 'green', marginRight: 10 }}
            />
            <Text style={styles.text}>{advantage}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f0f0',
  },
  sectionAbout: {
    padding: 20,
  },
  aboutHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainHighlightsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd', 
    borderRadius: 10, 
  },
  icon: {
    fontSize: 30,
    color: '#333',
  },
  text: {
    marginBottom: 10,
    color: '#555',
  },
  advantagesHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  advantages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default DetailSectionTwo;
