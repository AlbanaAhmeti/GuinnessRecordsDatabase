import axios from 'axios';

const BASE_API = 'http://localhost:5000'

// get All participants
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
// get one specific participant 
export const getOne = async (id) => {
  return axios.get(`${BASE_API}/womanMarathon/${id}`);
}
//Add a participant
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
// Edit One Participant
export const editOne = async (id, participantData) => {
  try {
    const response = await axios.patch(`${BASE_API}/womanMarathon/${id}`, participantData);
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};
// Delete One Participant
export const deleteOne = async (id) => {
  try {
    const response = await axios.delete(`${BASE_API}/womanMarathon/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
