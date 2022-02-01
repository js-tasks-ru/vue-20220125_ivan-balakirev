import { createApp } from './vendor/vue.esm-browser.js';

function fetchMeetupById( meetupId ) {
  const API_URL = 'https://course-vue.javascript.ru/api';

  return fetch( `${API_URL}/meetups/${meetupId}` ).then( ( response ) => {
    if ( response.ok ) {
      return response.json();
    } else {
      return response.json().then( ( error ) => {
        throw error;
      } );
    }
  } );
}

const app = createApp( {
  data() {
    return {
      title: '',
      itemId: 1,
    }
  },
  mounted() {
    fetchMeetupById( this.itemId ).then( ( meetup ) => {
      this.title = meetup.title;
    } );
  },
  watch: {
    itemId: {
      handler( newValue, oldValue ) {
        fetchMeetupById( newValue ).then( ( meetup ) => {
          this.title = meetup.title;
        } );
      }
    },
  },
} );
const vm = app.mount( '#app' );
