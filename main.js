const { createApp } = Vue;

createApp({
    data() {
        return {
            inputMessage: '',
            activeItem: 0,
            searchContact: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/bear.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropdown: ''
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/dog.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/hacker.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/scuba-diver.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/soldier.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            dropdown: ''
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/student.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/woman.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {

        showConversation(indice) {
            this.activeItem = indice;
        },

        sendMessage() {
            this.contacts[this.activeItem].messages.push(
                {
                    date: 'now',
                    message: this.inputMessage,
                    status: 'sent',
                    dropdown: ''
                }
            )
            this.inputMessage = '';
            setTimeout(() => {
                this.contacts[this.activeItem].messages.push(
                    {
                        date: 'now',
                        message: 'Ok',
                        status: 'received'
                    }
                )
            }, 1000);
        },

        clikArrow(indice) {
            if (this.contacts[this.activeItem].messages[indice].dropdown === '') {
                this.contacts[this.activeItem].messages[indice].dropdown = 'show';
            } else {
                this.contacts[this.activeItem].messages[indice].dropdown = ''
            }

        },

        deleteMessages(indice) {
            const filteredSentMessages = this.contacts[this.activeItem].messages.filter((stat) => {
                if (stat.status === 'sent') {
                    return true
                }
            });
            filteredSentMessages.pop();

            const filteredReceivedMessages = this.contacts[this.activeItem].messages.filter((stat) => {
                if (stat.status === 'received') {
                    return true
                }
            });

            const newArrayMessages = filteredSentMessages.concat(filteredReceivedMessages);

            this.contacts[this.activeItem].messages = newArrayMessages;

            if (this.contacts[this.activeItem].messages[indice].dropdown === '') {
                this.contacts[this.activeItem].messages[indice].dropdown = 'show';
            } else {
                this.contacts[this.activeItem].messages[indice].dropdown = ''
            }
        },

    },


    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
            })
        }
    }
}).mount('#app')


// import { DateTime } from 'luxon';

// DateTime.now();

