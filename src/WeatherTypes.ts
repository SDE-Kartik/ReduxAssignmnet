// export interface WeatherData {
//     city: string;
//     temperature: string;
//     lat: string;
//     lng: string;
//     language: string;
//   }
  
//   export interface WeatherError {
//     message: string;
//     code: number;
//   }
  
//   export interface WeatherState {
//     data: WeatherData | null;
//     error: WeatherError | null;
//     loading: boolean;
//   }
  
//   export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
//   export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
  
//   interface GetWeatherSuccessAction {
//     type: typeof GET_WEATHER_SUCCESS;
//     payload: WeatherData;
//   }
  
//   interface GetWeatherFailureAction {
//     type: typeof GET_WEATHER_FAILURE;
//     payload: WeatherError;
//   }
  
//   export type WeatherAction = GetWeatherSuccessAction | GetWeatherFailureAction;
  

export interface WeatherData {
  city: string;
  temperature: string;
  lat: string;
  lng: string;
  language: string;
}

export interface WeatherError {
  message: string;
}

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

interface GetWeatherDataAction {
  type: typeof GET_WEATHER_DATA;
  payload: WeatherData[];
}

export type WeatherAction = GetWeatherDataAction;

