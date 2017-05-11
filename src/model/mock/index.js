import api from "./api"

export default function (p) {
  return new Promise(function (resolve, reject) {
    setTimeout(
      function () {
        const response = {
          // `data` is the response that was provided by the server
          data: {},

          // `status` is the HTTP status code from the server response
          status: 200,

          // `statusText` is the HTTP status message from the server response
          statusText: 'OK',

          // `headers` the headers that the server responded with
          headers: {},

          // `config` is the config that was provided to `axios` for the request
          config: {}
        }
        response.data = api(p.apiName)
        response.config = p
        resolve(response)
      },
      1000
    )
  })
}
