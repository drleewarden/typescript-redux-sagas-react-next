import { put , call } from 'redux-saga/effects'
import axios from 'axios'
  
export function * getConsolidateDetails() {
    
    try {
        // const authorization = yield select(uiSelectors.authorization)
      
    //   const url = `https://sitapi.hesta.com.au/ws/rest/members/v1/HR/3333010424/account-balances/current`
    const url = `https://localswagger.mocklab.io/ws/rest/members/v1/HR/123/supermatch-consent`
      const headers = {
        'Authorization': `Bearer eyJraWQiOiJXdzJiVkFNWTk0QkVoWkxqRHlsZ09NcVJPNEpZU0FBU1pNRFhTUDlqV0U4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk9KTEhwZzB5N0t0U0hkSjA5MVRTcGVVUkhYdUlqM0E3Skh1NTRLeFRaRDAiLCJpc3MiOiJodHRwczovL2hlc3RhZGlnaXRhbC1pZDIub2t0YXByZXZpZXcuY29tL29hdXRoMi9hdXNtM2s5anUwZHo3bFpOUTBoNyIsImF1ZCI6Imh0dHBzOi8vc2l0YXBpLmhlc3RhLmNvbS5hdSIsImlhdCI6MTU2NjM1MzIwNSwiZXhwIjoxNTY2NDM5NjA1LCJjaWQiOiIwb2FsemEyYzM1elBHdGhxejBoNyIsInVpZCI6IjAwdW05emlsM2s0djNDUkpKMGg3Iiwic2NwIjpbIm9wZW5pZCIsImVtYWlsIl0sInN1YiI6IjMzMzMwMTA0MjQiLCJNZW1iZXJfSUQiOiIzMzMzMDEwNDI0IiwiUHJvZHVjdF9Db2RlIjoiSFIiLCJHUklEIjoiNWI0Zjg5YjUtYzY2OC00NjUwLTg5OGMtOTBiZTMyMzlkMzYzIiwiUGxhbl9NX1JlZiI6IlVua25vd24ifQ.Gh17ggKb96PU1ykSH1-T1aeUX8H3HTlFbW1T4GpZfMQlmXEJn9HyEoD30e8wNPemTFX8YgB8XQys1n0LfyC_fK1briC1zgkbq5NwO-j8WC0Bf7Vu_Htmn_xfZoFP33h2pLRvflFZauU1l5gdA6CJhoUtip8yckPSdW6yqNVxxH1zuUNObxlE6wvzwn_tErXB6ER0Uzcypxe7OpUrn6Mek3mtZUfJWA7kKA0jR5QQN3ZZ3RCzpZBZb_EjbpHgXAxhImNLdekFIMf9xAQz9h1nEHFGJZ0Kqff0cv7Gl-FO6I0lztotALLuDxiWzLlYvoumeuUdY4l5V95y1BuNlw-soA`,
        'X-Client-Source-System': 'AEM',
        'Access-Control-Allow-Origin': true,
        'X-Correlation-Id': 'amwd-5918-efgh-123456789109',
      }
      const requestConfig = {
        url,
        method: 'get',
        headers: headers,
      }
      console.log('calling')
  
      const response = yield call(axios, requestConfig)
      yield console.log(response)
    } catch (error) {
      console.log('error')
    }
  }