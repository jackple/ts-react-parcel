const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

const { shallow, render, mount } = Enzyme

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.EnzymeShallow = shallow
global.EnzymeRender = render
global.EnzymeMount = mount

// 设置环境变量
process.env['NODE_ENV'] = 'test'
process.env['APP_ENV'] = 'dev'
process.env['baseURL'] = 'http://rap2api.taobao.org'
