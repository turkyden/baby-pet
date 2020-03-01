import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import { AtButton } from 'taro-ui'

export default class Login extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  render() {
    return (
      <View className='index'>
        <AtButton type='primary' size='normal' onClick={this.getLogin}>获取登录云函数</AtButton>
        {/* <AtButton type='secondary' size='normal' openType="contact">客户服务</AtButton> */}
        <Text>点击按钮即可获取用户信息：</Text>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    )
  }
}
