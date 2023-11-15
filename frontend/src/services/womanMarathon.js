import axios from 'axios';

const BASE_API = 'http://localhost:5000'

export const getAll = () =>{
  return axios.get(`${BASE_API}/womanMarathon`)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
      throw error
    })
    .finally(function () {
    });
}

export const addOne = async ({ fullName, Nationality, Date, Time, Event, Source, Notes }) => {
  const userData = { fullName,
    Nationality, 
    Date, 
    Time, 
    Event, 
    Source, 
    Notes };

  try {
    const response = await axios.post(`${BASE_API}/womanMarathon/add`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

