import React, { Component } from "react";
import { StyleSheet, Text, View, Image,TextInput,Platform,StatusBar,ScrollView,Dimensions,SafeAreaView } from "react-native";
import{RFValue} from "react-native-responsive-fontsize" 
import { DropDownPicker } from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
}

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage:"image_1",
      dropDownHeight:40,
      title:"",
      author:"",
      description:"",
      story:"",
      moral:"",
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let previewImages = {
        image_1:require("../assets/story_image_1.png"),
        image_2:require("../assets/story_image_2.png"),
        image_3:require("../assets/story_image_3.png"),
        image_4:require("../assets/story_image_4.png"),
        image_5:require("../assets/story_image_5.png")
      }

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <View style = {styles.fieldsContainer}>
              <ScrollView>
                <Image
                  source = {previewImages[this.state.previewImage]} style = {styles.previewImage}/>
                <View style = {{height:RFValue(this.state.dropDownHeight)}}>
                  <DropDownPicker
                  items = {[
                    {label:"image1",
                    value : "image_1",
                  },
                  {label:"image2",
                  value : "image_2",
                },
                {label:"image3",
                  value : "image_3",
                },
                {label:"image4",
                  value : "image_4",
                },
                {label:"image5",
                  value : "image_5",
                }
                  ]}
                  
                  defaultValue = {this.state.previewImage}
                  containerStyle = {{heoght:40 , borderRadius:20, marginBotton:10}}
                  onOpen = {()=>{
                    this.setState({
                      dropDownHeight:170,
                    })
                  }}
                  onClose = {()=>{
                    this.setState({
                      dropDownHeight:40,
                    })
                  }}
                  style = {{backgroundColor:"transperant"}}
                  itemsStyle = {{justifyContent:"center"}}
                  dropDownStyle = {{backgroundColor:"dark_blue"}}
                  labelStyle = {{color:"white",fontFamily:"Bubblegum-Sans"}}
                  arrowStyle = {{color:"white", fontFamily:"Bubblegum-Sans"}}
                  onChangeItem = {(item)=>{
                    this.setState({
                      previewImage:item.value
                    })
                  }}
                  />

                </View>
                <TextInput
                  stlye = {styles.inputFont}
                  onChangeText = {(text)=>{
                    this.setState({
                      title : text
                    })
                  }}
                  placeholder = "title"
                  placeholderTextColor = "white"
                />
                <TextInput
                  stlye = {styles.inputFont}
                  onChangeText = {(text)=>{
                    this.setState({
                      author : text
                    })
                  }}
                  placeholder = "author"
                  placeholderTextColor = "white"
                />
                <TextInput
                  stlye = {styles.inputFont}
                  onChangeText = {(text)=>{
                    this.setState({
                      moral : text
                    })
                  }}
                  placeholder = "moral"
                  placeholderTextColor = "white"
                />
                <TextInput
                  stlye = {styles.inputDescription}
                  onChangeText = {(text)=>{
                    this.setState({
                      description : text
                    })
                  }}
                  placeholder = "description"
                  placeholderTextColor = "white"
                  multiline = {true}
                  numberOfLines = {4}
                />
                 <TextInput
                  stlye = {styles.inputStory}
                  onChangeText = {(text)=>{
                    this.setState({
                      story : text
                    })
                  }}
                  placeholder = "story"
                  placeholderTextColor = "white"
                  multiline = {true}
                  numberOfLines = {30}
                />
              </ScrollView>
              
          </View>
          
        </View>
      );
    }
  }
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  },
  fieldsContainer:{
    flex:0.85,
  },
  previewImage:{
    width:"90%",
    height:RFValue(250),
    alignSelf:"center",
    borderRadius:RFValue(10),
    resizeMode:"contain"
  },
  inputFont:{
    height:RFValue(40),
    borderColor:"white",
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    color:"white",
    fontFamily: "Bubblegum-Sans"
  },
  inputDescription:{
    height:RFValue(40),
    borderColor:"white",
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    color:"white",
    fontFamily: "Bubblegum-Sans",
    marginTop:15,
  },
  inputStory:{
    height:RFValue(40),
    borderColor:"white",
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    color:"white",
    fontFamily: "Bubblegum-Sans",
    marginTop:15,
    padding:RFValue(10)
  },
});
