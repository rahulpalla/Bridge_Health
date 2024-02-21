import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const DayBarGraph = () => {
  // Sample data for the bars (replace with your data)
  const data = {
    labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', 
    '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // Function to get the current date in the format "Month Day, Year"
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{getCurrentDate()}</Text>
      <ScrollView horizontal>
        <BarChart
          style={styles.graph}
          data={data}
          width={screenWidth * 4}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  
    
  },
  date: {
    fontSize: 18,
    fontFamily: 'Avenir',
    marginBottom: 10,
  },
  graph: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default DayBarGraph;
