import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable, action, runInAction, computed } from 'mobx'
import classNames from 'classnames'
import { Button, Icon } from 'antd'

import { ComponentExt } from './../../util/reactExt'
import * as commonStyles from './../../styles/common.css'
import * as styles from './index.css'
import { HelloStore } from './../../store/helloStore'
import SvgIcon from './../../components/Icons'

interface Props {
  helloStore?: HelloStore
}

@inject('helloStore')
@observer
export default class Hello extends ComponentExt<Props, {}> {
  // 同props一样, state也应交由mobx管理
  @observable
  private helleState: string = 'helleState'

  @action
  private changeHelleState = (): void => {
    this.helleState = 'changeHelleState'
  }

  render() {
    const store = this.props.helloStore
    return (
      <div className={commonStyles.textCenter}>
        <h1 className={classNames(styles.test)} onClick={this.changeHelleState}>Hello...{this.helleState}</h1>
        <div>
          <h1 className={styles.scss}>scss!!{store.computedTest}</h1>
        </div>
        <Button type="primary" onClick={store.getUserInfo} loading={store.loading}>点击请求</Button>
        <div className={styles.btnContainer}>
          <Button type="danger" onClick={store.getError}>点击错误的请求</Button>
        </div>
        {
          store.loading
            ?
            <div id="loading">loading...</div>
            :
            <div id="user-info">{JSON.stringify(store.userInfo)}</div>
        }
        <SvgIcon kind="stage" color="red" />
      </div>
    )
  }
}
