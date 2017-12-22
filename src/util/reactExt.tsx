import * as React from 'react'
import { message, notification } from 'antd'

import * as api from './../util/api'

/**
 * 扩展组件/store类以方便调用
 * 集成api, antd公用组件
 */
interface Props {}
interface States {}

export class ComponentExt<P, S> extends React.Component<P, S> {
  readonly api = api
  readonly $message = message
  readonly $notification = notification
}

export class PureComponentExt<P, S> extends React.PureComponent<P, S> {
  readonly api = api
  readonly $message = message
  readonly $notification = notification
}

export class StoreExt {
  readonly api = api
  readonly $message = message
  readonly $notification = notification
}
