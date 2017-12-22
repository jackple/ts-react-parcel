import React from 'react'

import { HelloStore } from './../../../store/helloStore'
import Hello from './../../../components/Hello'

describe('Hello.functional', () => {
  it('getUserInfo done', async () => {
    const store = new HelloStore()
    await store.getUserInfo()
    expect(store.userInfo.success).toBe(true)

    const wrapper = EnzymeMount(<Hello helloStore={store} />)
    expect(wrapper.find('#loading').length).toBe(0)
    expect(wrapper.find('#user-info').length).toBe(1)
  })
})
