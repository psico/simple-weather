import {Text, View} from 'react-native';
import Styles from './css';
import axios from 'axios';

const Main = () => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('apiKey', '<REQUIRED>');
  encodedParams.append('locationKey', '<REQUIRED>');

  const options = {
    method: 'POST',
    url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '24d81cf917mshf57f1c543de525ep1d11d2jsn5809bb93c57a',
      'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <View style={Styles.body}>
      <Text>Hello Main Page</Text>
    </View>
  );
};

export default Main;
