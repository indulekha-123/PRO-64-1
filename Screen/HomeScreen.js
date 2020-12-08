import React,{Component}from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity}from 'react-native';
import {Header} from'react-native-elements';



    export default class HomeScreen extends React.Component{
        constructor(){
            super();
            this.state={
              text:'',
              detailsTitle:'',
              lexicalCategory:''
              wordsearched:'',
              wordreturned :'',
              lexicalCategory:'',
              definition:"",
              isButtonPressed:'',
            }
          }

         getWord=(text)=>{
             var text=text.toLowerCase()
             try{
                var word = dictionary[text]["word"]
                var lexicalCategory=dictionary[text]["lexicalCategory"]
                var definition=dictionary[text]["definition"]
                this.setState({
                    "word" : word,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory
        
            
                })
             }
             catch(err){
                 alert("Sorry This Word is not available for now")
                 this.setState({
                     'text':'',
                     'isSearchPressed':false
                 })
             }
         }
           



          render() {
            return (


<TextInput
style={styles.inputBox}
onChangeText={text =>{
    this.setState({
        text: text,
        isSearchPressed:false,
        word : "Loading..."
        lexicalCategory:'',
        examples :[],
        defination:""
    });
}}
value={this.state.text}/>

//<TouchableOpacity
//style={styles.searchButton}
//onPress={()=>{
  //  this.setState({isSearchPressed :true});
  //  this.getWord(this.state.text)
//}}>

    
 .then((response)=>{
    var responseObject = response
    if(responseObject){
        var wordData = responseObject.definitions[0]
        var definition=wordData.description
        var lexicalCategory=wordData.wordtype

       
       
    }

    else {
        this.setState({
            "word": this.state.text,
            "definition":'Not Found',

        })

    }
   })


//<View style={styles.detailsContainer}>
 //   <Text style={styles.detailsTitle}>
  //      Word:{""}
  //  </Text>
   // <Text style={{frontSize:18}}>
   //   {this.state.word}  

   // </Text>
//</View>


//<View style={styles.detailsContainer}>
  //  <Text style={styles.detailsTitle}>
  //      Type:{""}
  //  </Text>

   // <Text style={{frontSize:18}}>
    //    {this.state.lexicalCategory}
  //  </Text>
//</View>

//<View style={{flexDirection:'row',flexWrap:'wrap'}}>
   // <Text style={styles.detailsTitle}>
      //  Definition:{""}

   // </Text>

//<Text style={{ fontSize:18}}>
   // {this.state.definition}
//</Text>

//</View>


<View style={styles.outputContainer}>
    <Text style={{fontSize:20}}>
        {
            this.state.isSearchPressed&& this.state.word==="Loading...."
            ?this.state.word
            :""
        }
    </Text>
    {
        this.state.word!=="Loading..."?
        (
            <View style={{justifyContent:'center',marginLeft:10}}>

        

<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Word:{""}
    </Text>
    <Text style={{frontSize:18}}>
      {this.state.word}  

    </Text>
</View>


<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Type:{""}
    </Text>

    <Text style={{frontSize:18}}>
        {this.state.lexicalCategory}
    </Text>
</View>




                );
            }
          }


          const styles =StyleSheet.create({
            container:{
                flex: 1,
        
            },
            outputBoxContainer:{
                flex:0.3,
                alignItems:'center',
                justifyContent:'center'
            },
            inputBox:{
                width: "80%",
                alignSelf: 'center',
                height:40
            },
             


    








    