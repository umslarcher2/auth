// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';


// Create a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 26
  }

};

// Make component available to other parts of the app
export { Header };

// export { Header: Header };
// since the key and object names are indentical we can use just Header
