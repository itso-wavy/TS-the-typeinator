import './style.css';
import axios from 'axios';

declare const google: any;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="map">
    <p>Please enter an address!</p>
  </div>
  <form>
    <input type="text" id="address">
    <button type="submit">SEARCH ADDRESS</button>
  </form>
`;

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

// const GOOGLE_API_KEY = 'AIzaSyDDIXASJNqsQLI1QpssOtBXxJnL1OOCY4I';
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
    )
    .then(res => {
      if (res.data.status !== 'OK') {
        console.log(res);

        throw new Error('Could not fetch location!');
      }

      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 16,
      });

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch(err => {
      alert(err.message);
    });
}

form.addEventListener('submit', searchAddressHandler);
