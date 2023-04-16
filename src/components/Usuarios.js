import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Usuarios = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://10.0.2.2/users', 
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log(json)
      setData(json.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({user}) => (
            <Text>
              {user.name}, {user.lastname}
            </Text>
          )}
        />
        
      )}
    </View>
  );
};

export default Usuarios;
