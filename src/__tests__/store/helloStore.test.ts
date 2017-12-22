import { HelloStore } from './../../store/helloStore'

describe('helloStore', () => {
  it('creates new todos', () => {
    const store = new HelloStore()
    store.loading = true
    expect(store.loading).toBe(true)
  })
})
