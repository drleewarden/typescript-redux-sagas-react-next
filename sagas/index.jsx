import { all } from 'redux-saga/effects'
import { getConsolidateDetails } from './sagas'
import { getFunds } from './saga2'

export default function* rootSaga() {
  yield all([
    getConsolidateDetails(),
    getFunds()

  ])
}