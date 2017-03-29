// //import Apis from "../utils/api.js";//Apis为数据请求的后台接口地址
// //import { callApi } from '../../utils/utils.js';//callApi为封装的利用Ferch请求方法
// import {
//     GET_VALUE,
//     GET_SUCCESS,
//     GET_FAILURE
// } from "./action.js";
//
// function getValueRequest(type) {
//     return{
//         type:type
//     }
// }
//
// function getValueRequestSuccess(type){
//     return function(data){
//         return{
//             type:type,
//             data:data
//         }
//     }
// }
// function getValueRequestFailure(type){
//     return function(data){
//         return{
//             type:type
//         }
//     }
// }
//
// /***
//  * @func:提交请求的函数;
//  */
// // export getSelectValue = (parm) => {
// //     let url=Apis.GET_SELECT_VALUE_URL;
// //     return callApi(
// //         url,
// //         parm,
// //         getValueRequest(GET_VALUE),
// //         getValueRequestSuccess(GET_SUCCESS),
// //         getValueRequestFailure(GET_FAILURE)
// //     );
// // }
