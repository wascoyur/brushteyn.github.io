let rerender = () => {}

let posts = [
    {
        id: 1,
        avaUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
        text: 'Hellow world!'
    },
    {
        id: 2,
        avaUrl: 'https://banner2.cleanpng.com/20180505/upw/kisspng-computer-icons-avatar-businessperson-interior-desi-corporae-5aee195c6d1683.4671087315255535004468.jpg',
        text: 'How are you?'
    },
    {
        id: 3, 
        avaUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png', 
        text: 'Im fine thank you!'
    },
    {
        id: 4, 
        avaUrl: 'https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png', 
        text: 'London is the capital of the great Britain!'
    },
    {
        id: 5, 
        avaUrl: 'https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png', 
        text: 'WTF is going on?'
    },
];

export const addPost = (postMessage) => {
    let newPost = {
        id: 6,
        avaUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
        text: postMessage
    };

    posts.push(newPost);
    rerender(posts);
}

export const subscribe = (observer) => {
    rerender = observer
}

export default posts;