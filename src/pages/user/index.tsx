import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import classnames from 'classnames'

import styles from './style/index.less'
import { IWrapHomeState } from '@/store/home/type'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  msg: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

type IState = PageState

class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      msg: '我是爷爷'
    }
  }

  componentDidUpdate() { }

  componentWillUnmount() { }

  componentDidShow() {
    // const curPage = Taro.getCurrentPages()[Taro.getCurrentPages().length - 1]
    // curPage.getTabBar().setCurrentIndex(1)
    // if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar) {
    //   this.$scope.getTabBar().setData({
    //     selected: 1 //当前tab对应的索引
    //   })
    // }
  }

  componentDidHide() { }

  onReady() {
    console.log('onReady')
  }

  onNextPage = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  onNextList = () => {
    Taro.navigateTo({
      url: '/pages/list/index'
    })
  }

  render() {
    return (
      <View className={classnames(styles.index, { [styles.user]: true })}>
        <Button onClick={this.onNextPage}>首页</Button>
        <Button onClick={this.onNextList}>虚拟列表</Button>
        <Text>{this.state.msg}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: IWrapHomeState) => ({
  count: state.home.count
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

