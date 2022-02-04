import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupDescription from "../02-MeetupDescription/MeetupDescription.js";
import MeetupCover from "../03-MeetupCover/MeetupCover.js";
import MeetupInfo from "../04-MeetupInfo/MeetupInfo.js";
import MeetupAgenda from "../05-MeetupAgenda/MeetupAgenda.js";
import MeetupAgendaItem from "../05-MeetupAgenda/MeetupAgendaItem.js";
import MeetupView from "../06-MeetupView/MeetupView.js";

export default defineComponent( {
  name: 'PageMeetup',

  data() {
    return {
      meetup: {},
      loading: true,
      error: '',
    }
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupView,
  },

  mounted() {
    this.getMeetup( this.meetupId );
  },
  watch: {
    meetupId: {
      handler( newValue ) {
        this.getMeetup( newValue );
      }
    },
  },

  methods: {
    getMeetup( id ) {
      this.loading = true;
      this.error = '';

      fetchMeetupById( id )
        .then( ( meetup ) => {
          this.meetup = meetup;
          this.loading = false;
        } )
        .catch( ( error ) => {
          this.error = error.message;
        } );
    },
  },

  template: `
    <div class="page-meetup">
    <meetup-view v-if="!loading && !error.length" :meetup="meetup"></meetup-view>

    <ui-container>
      <ui-alert v-if="!error.length && loading">Загрузка...</ui-alert>
    </ui-container>

    <ui-container>
      <ui-alert v-if="error.length">{{ error }}</ui-alert>
    </ui-container>
    </div>`,
} );
