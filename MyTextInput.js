import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';


export default class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42, backgroundColor:'#f00'}}>

                    {/* this.state.text.split(' ') 将输入的字符串按照' '分割开来 比如输的字符串为a b c,则
                        [a,b,c],然后在做map映射 [a,b,c].map((word) => word &&'🍕')
                        map后面是一个映射函数,word = word && '🍕'(该函数为es6的箭头函数，其中word为形参,
                        实参为分割后数组中的每个元素a,b,c。只要word部位空，word&&'🍕'的结果都是'🍕'),所以分割数组
                        中有几个元素就有几个'🍕',然后在用' '拼接起来。

                    */}

                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}