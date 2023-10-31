const { createApp } = Vue;

createApp({
    data() {
        return {
            inputMessage: '',
            activeItem: 0,
            searchContact: '',
            contacts: [
                {
                    name: 'Mike',
                    avatar: 'img/avatar.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Where is Luke?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Did you do thee laundry?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'All done!',
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
                            message: 'Hey how are you?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Good thanks! What you do you do tonight?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'I don\'t have plans.',
                            status: 'sent',
                            dropdown: ''
                        }
                    ],
                },
                {
                    name: 'Samuel',
                    avatar: 'img/dog.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: '50 euro man',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'I think you is a wrong chat?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Oh sorry!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alex B.',
                    avatar: 'img/hacker.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'You know.. he opened a new restaurant',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ah really? I didn\'t know that!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alex L.',
                    avatar: 'img/scuba-diver.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Remeber to clean the house!',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'All done!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Britney',
                    avatar: 'img/soldier.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hi I\'m Britney, any news?',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Not yet, I\'ll let you know!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Ok, thanks!',
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
                            message: 'Hi, I\'m Federico, I\'m a student at Boolean, I\'m looking for a job!',
                            status: 'sent',
                            dropdown: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Hi Federico, we\'ll let you know!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'David',
                    avatar: 'img/woman.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hi, Do you want to go to the cinema tonight?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, I\'m sorry, I have to study!',
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


