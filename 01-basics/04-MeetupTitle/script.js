import { createApp } from './vendor/vue.esm-browser.js';

// Требуется создать Vue приложение
const app = createApp( {
  data() {
    return {
      title: '',
      itemId: 1,
    }
  },
  methods: {
    fetchMeetupById( meetupId ) {
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
  },
  computed: {
    meetup() {
      this.fetchMeetupById( this.itemId ).then( ( meetup ) => {
        this.title = meetup.title;
      } );
    }
  },
  watch: {
    meetup: {
      handler( newValue, oldValue ) {
        this.title = oldValue;
      }
    },
  },
} );
const vm = app.mount( '#app' );
