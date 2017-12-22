import { observable, action, runInAction, computed } from 'mobx'

import { StoreExt } from './../../util/reactExt'

class HelloStore extends StoreExt {
  @observable
  public userInfo: any = null

  @observable
  public loading: boolean = false

  @action
  getUserInfo = async (): Promise<any> => {
    this.loading = true
    try {
      const res = await this.api.getUserInfo({})
      runInAction(() => {
        this.userInfo = res
      })
      this.$message.success('success!!!')
    } catch (err) { }
    runInAction(() => {
      this.loading = false
    })
  }

  @action
  getError = async (): Promise<any> => {
    this.loading = true
    try {
      await this.api.getError({})
    } catch (err) { }
    runInAction(() => {
      this.loading = false
    })
  }

  @computed get computedTest() {
    return JSON.stringify(this.userInfo) + this.loading
  }
}

const helloStore = new HelloStore()

export {
  helloStore as default,
  HelloStore
}
