import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default  class BookDonate  extends React.Component {
    constructor(){
        super()
        this.state={
            requestedBookList:[]
        }
    }
    requestedBookList=()=>{
        db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var snapshot1=snapshot.docs.map((document)=>{document.data()})
            this.setState({requestedBookList:snapshot1})
        })
    }
    componentDidMount(){this.requestedBookList()}
  render() {
    return (
      <View>
        
      </View>
    );
  }
}