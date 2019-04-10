import axios from 'axios'
import Api from '../api/api'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router/index'

let base = Api.base;
// axios.defaults.baseURL = process.env.API_HOST;
// axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  config => {
    /*if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }*/
    return config
  },
  err => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  response => {
    if (response.data.code == 10002) {
      store.commit(types.LOGOUT)
      router.currentRoute.path !== '/login' &&
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.path },
      })
    }
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  },
)

export const postRequest = (url, params) => {
  const Token = store.state.token;
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      // 'token': Token,
    }
  });
}

export const getRequest = (url) => {
  const Token = store.state.token;
  return axios({
    method: 'get',
    url: `${base}${url}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
      // 'token': Token
    }
  });
}
