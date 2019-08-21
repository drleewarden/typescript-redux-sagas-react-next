import { all } from 'redux-saga/effects'
import { getConsolidateDetails } from './sagas'

export default function* rootSaga() {
  yield all([
    getConsolidateDetails()
  ])
}