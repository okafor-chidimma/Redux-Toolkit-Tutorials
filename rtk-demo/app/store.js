const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')
// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  }
  //getDefaultMiddleware() returns an array of all the middleware rtk adds to our store by default. note that concat array method can take as many arguments as you want to add
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

module.exports = store
