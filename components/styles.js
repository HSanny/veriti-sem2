import { StyleSheet } from 'react-native';
import { theme } from '../resources/colour-scheme/theme';

// blue -> #87CEFA
// gray -> #E0E0E0
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor
  },
  input: {
    height: 40, 
    backgroundColor: 'white',
    borderColor: theme.primaryColor, 
    borderWidth: 2,
    borderRadius: 10,
    textAlign:"center",
    width: 230,
    height:50,
    fontSize:18,
  },
  input2: { 
    height: 40, 
    backgroundColor: "white",
    borderColor: 'white', 
    borderWidth: 2,
    borderRadius: 20,
    textAlign:"center",
    width: 300,
    height:50,
    fontSize:18,
  },
  inputSmall: { 
    height: 40, 
    borderColor: 'white',
    backgroundColor:"white", 
    borderWidth: 2,
    borderRadius: 20,
    textAlign:"center",
    width: 140,
    height:50,
    fontSize:18,
  },
  intButton: {
    borderColor: theme.primaryColor, 
    borderWidth: 2,
    borderRadius: 10,
    width:100,
    height:50, 
    alignItems:'center',
    padding:10,
    backgroundColor: theme.primaryColor
  },
  intButtonWide: {
    borderColor: theme.primaryColor, 
    borderWidth: 2,
    borderRadius: 15,
    width:200,
    height:50, 
    alignItems:'center',
    padding:10,
    backgroundColor: theme.primaryColor
  },  
  buttonText: {
    textAlign:"center",
    color:"white",
    fontSize:18
  },
  settings: {
    backgroundColor: "white",
    borderColor: theme.primaryColor, 
    borderWidth: 2,
    borderRadius: 10,
    height:40,
    width: 250,
    fontSize:18,
    flexDirection:"row",
    marginTop:10
  },
  controls: {
    backgroundColor:"white",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    opacity:0.75,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: theme.primaryColor,
    marginLeft: 15,
  },
  videoContainer: {
    flex: 1,
    paddingTop: 250
  }
  
});