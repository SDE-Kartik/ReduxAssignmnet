import axios from "axios";
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';
export const UNABLE_TO_GET_DATA = 'UNABLE_TO_GET_DATA';
export const getWeather = (): any => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`https://mocki.io/v1/ae488869-3f09-40bf-ba51-f201338aa664`);
      console.log("In Actions");
      console.log(response);
      dispatch({ type: GET_WEATHER_DATA, payload: response.data });
    } catch (error) {
      dispatch({ type: UNABLE_TO_GET_DATA, payload: error });
    }
  };
};




// export const getWeather = () => async (dispatch:any) => {
//   try {
//     const response = await axios(
//         {
//             method:'get',
//             url:'https://mocki.io/v1/144a57ea-f4a6-4b6d-b366-981957e2a00e',

//         }
//     );
//     console.log(response.data);
//     dispatch({type: 'GET_WEATHER_DATA', payload: response.data});
//   } catch (error) {
//     dispatch({type: 'UNABLE_TO_GET_DATA', payload: error});
//   }
// };

// import axios from "axios";
// import { Dispatch } from "redux";
// import { GET_WEATHER_DATA, WeatherAction, WeatherData, WeatherError } from "../WeatherTypes";
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from './Store';
// export const getWeather = (): ThunkAction<void, RootState, null, WeatherAction> => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`https://mocki.io/v1/144a57ea-f4a6-4b6d-b366-981957e2a00e`);
//       const data: WeatherData[] = response.data;
//       dispatch({ type: GET_WEATHER_DATA, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


