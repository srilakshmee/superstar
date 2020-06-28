let backendHost = '';
//const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

 if(hostname === 'localhost'){
  backendHost = 'http://localhost:5000';
}
export const API_ROOT = backendHost+'/';
export const APPPATH = backendHost;
