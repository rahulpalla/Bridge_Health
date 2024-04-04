import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const WeekBarGraph = () => {
  // Sample data for the bars (replace with your data)
  const data = {
    labels: ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa' ],
    datasets: [
      {
        data: [82, 95, 117, 97, 115, 91, 88],
      },
    ],
  };

  // Function to get the current week in the format "Week of X/X/XX - X/X/XX"
  const getCurrentWeek = () => {
    const currentDate = new Date();
    const options = { month: 'numeric', day: 'numeric' };
  
    // Get the start date of the current week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());
  
    // Get the end date of the current week (Saturday)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
  
    // Format the dates
    const formattedStartDate = startDate.toLocaleDateString(undefined, options);
    const formattedEndDate = endDate.toLocaleDateString(undefined, options);

    const currentYear = currentDate.getFullYear(); // Get the current year
  
    return `${currentYear}\nWeek of ${formattedStartDate} - ${formattedEndDate}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.year}>{getCurrentWeek()}</Text>
      <ScrollView horizontal>
        <BarChart
          style={styles.graph}
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    margin: 15,
    borderRadius: 25,
  },
  year: {
    fontSize: 18,
    fontFamily: 'Avenir',
    padding: 20,
    textAlign: 'center', // Center text horizontally
  },
  graph: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default WeekBarGraph;