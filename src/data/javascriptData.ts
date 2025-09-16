import { techStacks } from "./techStacks";

export const javascriptDescription = {
  title: "Javascript Projects",
  description: "A collection of projects built using HTML, CSS, and Javascript.",
  tech: techStacks.javascript
}

export const jsProjects = [
    {
        id: 'mathgame',
        title: 'Math Game',
        description: 'A multi-leveled math problem generator to test your skills.',
        image: './javascript-images/math_game.jpg',
        imageAlt: 'equations',
        link: 'projects/Javascript Projects/Math Game/index.html',
    },
    {
        id: 'pagebuilder',
        title: 'Page Builder',
        description: 'An interface for quickly mocking up simple webpages in realtime.',
        image: './javascript-images/webpage.jpg',
        imageAlt: 'webpage',
        link: 'projects/Javascript Projects/Page Builder/index.html',
    },
    {
        id: 'countrydata',
        title: 'Country Data',
        description: 'A searchable and sortable database for country data.',
        image: './javascript-images/globe.jpg',
        imageAlt: 'globe',
        link: 'projects/Javascript Projects/Country Data/index.html',
    },
    {
        id: 'worldclocks',
        title: 'World Clocks',
        description: 'A simple display of multiple timezones from around the world, including their weather.',
        image: './javascript-images/clocks.jpg',
        imageAlt: 'clocks',
        link: 'projects/Javascript Projects/World Clock/index.html',
    },
    {
        id: 'tictactoe',
        title: 'Tic Tac Toe',
        description: 'A Player vs Computer tic tac toe game with score keeping.',
        image: './javascript-images/tictactoe.jpg',
        imageAlt: 'TicTacToe',
        link: 'projects/Javascript Projects/TicTacToe/index.html',
    },
    {
        id: 'userlogin',
        title: 'User Login',
        description: 'A user account system with registration, login, admin access and management.',
        image: './javascript-images/account.jpg',
        imageAlt: 'computer',
        link: 'projects/Javascript Projects/User Login/index.html',
    },
    {
        id: 'memory',
        title: 'Memory Game',
        description: 'A grid pattern matching memory game with adjustable difficulty.',
        image: './javascript-images/cards.jpg',
        imageAlt: 'cards',
        link: '/projects/Javascript Projects/Memory Game/index.html',
    },
    {
        id: 'calendar',
        title: 'Family Purity Calendar',
        description: 'Under Development.',
        image: './javascript-images/calendar.jpg',
        imageAlt: 'calendar',
        link: '/projects/Javascript Projects/Mikvah Calendar/index.html',
    },
    {
        id: 'calculator',
        title: 'Calculator',
        description: 'Under Development. TypeScript.',
        image: './javascript-images/calculator.jpg',
        imageAlt: 'calendar',
        link: '/projects/Javascript Projects/Calculator/dist/index.html',
    }
];

export { techStacks };
