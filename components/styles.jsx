import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  translucentContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 28,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    padding: 13,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 30,
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold',
    
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  effort: {
    position: 'relative',
    bottom: 75
  }, 
  extbutcon:{
    flex: 0, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: '10%',
    position: 'relative',
    bottom: 55,

  },
  extbut: {
    flex: 0,
    width: '30%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 7,
    paddingBottom: 7,
  }
});

export default styles;