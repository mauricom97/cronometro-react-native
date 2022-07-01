import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      btnGo: 'Go'
    }

    this.timer = null
    this.go = this.go.bind(this)
    this.clean = this.clean.bind(this)
  }

  go() {
    if (this.timer && this.state.btnGo !== 'Continue') {
      this.setState({
        btnGo: 'Continue'
      })
      clearInterval(this.timer)
    } else if (this.timer && this.state.btnGo === 'Continue') {
      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1,
          btnGo: 'Pause'
        })
      }, 100)
    } else {
      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1,
          btnGo: 'Pause'
        })
      }, 100)
    }
  }
  clean() {
    clearInterval(this.timer)
    this.timer = null
    this.setState({
      number: this.state.number = 0,
      btnGo: 'Go'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} />
        <Text style={styles.timer}>
          {this.state.number.toFixed(1)}
        </Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.button} onPress={this.go}>
            <Text style={styles.btnText} >
              {this.state.btnGo}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.clean}>
            <Text style={styles.btnText}>
              Clear
            </Text>
          </TouchableOpacity>

        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5b9aa0'
  },
  timer: {
    fontSize: 50,
    marginTop: -150,
    color: '#fff',
    fontWeight: 'bold'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5b9aa0'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 150,
    height: 40
  }

})

export default App
