import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import Dashboard from "./src/components/Dashboard";
import Proyectos from "./src/components/Proyectos";
import Usuarios from "./src/components/Usuarios";

const LogoImage = require('./assets/images/OL-Software-logo.png');

function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
        <View style={styles.loginContainer}>
          <Image source={LogoImage}/>
          <Text style={styles.title}>Hola! Bienvenido a OLSoftware</Text>
          <View>
            <TextInput style={styles.inputText}
              placeholder='Correo'
              // value={username}
              // setValue={setUsername}
            />
          </View>
          <View>
            <TextInput style={styles.inputText}
              placeholder='Contraseña'
              secureTextEntry={true}
              // value={password}
              // setValue={setPassword}
          />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
              <Text style={styles.buttonLabel}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.buttonContainerAlternative}>
            <TouchableOpacity 
            title="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.buttonAlternative}>
              <Text style={styles.buttonLabel}>Dashboard</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerAlternative}>
            <TouchableOpacity 
            title="Proyectos"
            onPress={() => navigation.navigate('Proyectos')}
            style={styles.buttonAlternative}>
              <Text style={styles.buttonLabel}>Proyectos</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerAlternative}>
            <TouchableOpacity 
            title="Usuarios"
            onPress={() => navigation.navigate('Usuarios')}
            style={styles.buttonAlternative}>
              <Text style={styles.buttonLabel}>Usuarios</Text>
            </TouchableOpacity>
        </View>

    </View>
    
  );
}

function DashboardScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Dashboard />
    </View>
  );
}

function ProyectosScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Proyectos />
    </View>
  );
}
function UsuariosScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Usuarios />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Proyectos" component={ProyectosScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    
  },
  title: {
    fontSize: 18,
    marginBottom: 25,
    marginTop: 40
  },
  inputText: {
    marginBottom: 20,
    borderColor: '#dfdfdf',
    padding: 10,
    borderWidth:1,
    width: '100%',
    paddingLeft: 30
  },
  
  buttonContainer: {
    width: 150,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#1e3bb3',
    borderRadius: 5,
    marginTop: 10,
    marginBottom:20
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
  },
  buttonContainerAlternative: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#0079ff',
    borderRadius: 5,
    marginTop: 10,
  },
});
