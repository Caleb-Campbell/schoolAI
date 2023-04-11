import axios from 'axios'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ilc_DEMO_STUDENT_TOKEN'
    }
  };
// rewrite getCleverData in an axios request format
export const getCleverData =() => {
    axios.get('https://api.clever.com/v3.0/me', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
// rewrite getCleverData in an async/await format

export const getSchoolData = () => {
    fetch('https://clever.com/oauth/tokens?owner_type=district', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
export const getCleverToken = () => {
    axios.get('https://api.clever.com/v3.0/tokens', options)
    .then(response => {
        console.log(response)
        // const token = response.
    })
    .catch(err => console.error(err));
}