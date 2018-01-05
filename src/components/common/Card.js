import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 5,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,


  }
};

export { Card };
