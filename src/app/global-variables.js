export const root = {
    colors : {
        textPri : '#000',
        textSec : '#eee',
        pri: '#2e80eb',
        sec: '#d6e4fa',
    },

    background: {
        bgMain: '#f1f9ff',
        bgLighter: '#f8f8f8',
        bgLight: '#ebebeb'
    },

    fontSize : {
        h1 : '40px',
        h2 : '32px',
        h3 : '28px',
    },

    flexSet : (ai = 'start', jc = 'start') => {
        return `
            display: flex;
            align-items: ${ai};
            justify-content : ${jc};
        `
    },

    backgroundSet : (url = '', type = 'cover') => {
        return `
            background-image : url(${url});
            background-size : ${type};
            background-repeat: no-repeat;
            background-position : center;
        `
    }

}