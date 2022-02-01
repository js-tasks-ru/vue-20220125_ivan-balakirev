import { createApp } from './vendor/vue.esm-browser.js';


// Требуется создать Vue приложение
const app = createApp( {
  data() {
    return {
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],
      isActive: false,
      search: '',
    }
  },
  computed: {
    sortedEmails() {
      const EmailsWithStatus = [...this.emails];

      for ( let i = 0; i < EmailsWithStatus.length; i ++ ) {
        const email = EmailsWithStatus[ i ].toLowerCase();

        EmailsWithStatus[ i ] = {
          email: EmailsWithStatus[ i ],
          isActive: this.search.length > 1 && email.indexOf( this.search ) !== - 1,
        }
      }
      return EmailsWithStatus;
    },
  }
} );
const vm = app.mount( '#app' );
