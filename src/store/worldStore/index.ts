import { observable, action, runInAction } from 'mobx'
import * as api from './../../util/api'

class WorldStore {
  @observable
  public userInfo: any = null

  @observable
  public loading: boolean = false

  @action
  getUserInfo = async (): Promise<any> => {
    this.loading = true
    try {
      const res = await api.getUserInfo({})
      runInAction(() => {
        this.userInfo = res
      })
    } catch (err) { }
    runInAction(() => {
      this.loading = false
    })
  }

  @action
  getError = async (): Promise<any> => {
    this.loading = true
    try {
      await api.getError({})
    } catch (err) { }
    runInAction(() => {
      this.loading = false
    })
  }
}

const worldStore = new WorldStore()

export {
  worldStore as default,
  WorldStore
}
