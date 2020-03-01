import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import './index.scss'

import Login from '../../components/login/index.weapp'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View  className='tj-about'>
        <View  className='tj-about-user'>
          <AtAvatar className='tj-about-avatar' circle size="large" openData={{ type: 'userAvatarUrl' }}></AtAvatar>
          <View className='tj-about-name'>
            <open-data type="userNickName"></open-data>
          </View>
        </View>
        <AtList>
          <AtListItem
            title='意见反馈'
            extraText='￣▽￣'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'mail', }}
          />
          <AtListItem
            title='开发者'
            extraText='@谭雯儿'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'user', }}
          />
          <AtListItem
            title='公众号'
            extraText='BabyPet'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'share', }}
          />
          <AtListItem
            title='捐赠'
            extraText='喝杯咖啡'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'sketch', }}
          />
          <AtListItem
            title='版本'
            extraText='v0.0.1'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'file-code', }}
          />
        </AtList>
        <Login/>
      </View>
    )
  }
}
