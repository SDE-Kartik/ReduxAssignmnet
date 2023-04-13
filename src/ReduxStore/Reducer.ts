import {combineReducers} from 'redux';
import {GET_WEATHER_DATA, UNABLE_TO_GET_DATA} from './Actions';

interface CityData {
  city: string;
  temperature: string;
  lat: string;
  lng: string;
  language: string;
}
export interface WeatherState {
  weatherData: CityData[];
  error: any;
}

const initialState: WeatherState = {
  weatherData: [
    {
      city: '-',
      temperature: '-',
      lat: '-',
      lng: '-',
      language: '-',
    },
  ],
  error: null,
};

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      console.log("In Reducer");
      console.log(action.payload);
      return {...state, weatherData: action.payload};
    case UNABLE_TO_GET_DATA:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});
export default rootReducer;

// import { combineReducers } from 'redux';
// //import { GET_WEATHER_DATA, UNABLE_TO_GET_DATA } from './Actions';

// interface WeatherState {
//   weatherData: any;
//   error: any;
// }

// const initialState: WeatherState = {
//   weatherData: null,
//   error: null,
// };

// const weatherReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case GET_WEATHER_DATA:
//       return { ...state, isLoading: false, weatherData: action.payload };
//     case UNABLE_TO_GET_DATA:
//       return { ...state, isLoading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   weather: weatherReducer,
// });

// export default rootReducer;

// import { WeatherAction, GET_WEATHER_DATA, WeatherData } from "../WeatherTypes";

// interface WeatherState {
//   weatherData: WeatherData[];
// }

// const initialState: WeatherState = {
//   weatherData: [],
// };

// const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
//   switch (action.type) {
//     case GET_WEATHER_DATA:
//       return {
//         ...state,
//         weatherData: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default weatherReducer;
