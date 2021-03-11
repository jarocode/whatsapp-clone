import { createUseStyles } from 'react-jss';

const useSideBarStyles = createUseStyles({
    menuIcon : {
        filter: 'invert(56%) sepia(0%) saturate(290%) hue-rotate(177deg) brightness(101%) contrast(92%)', 
        margin: '-.5rem 0 0 1.5rem'
    },
    menuIcon2 : {
        filter: 'invert(56%) sepia(0%) saturate(290%) hue-rotate(177deg) brightness(101%) contrast(92%)', 
    },
    chatContactDiv: {
        background: '#fff', 
        width: '10rem', 
        height: '100vh',
    },
    chatContactRow: {
        padding:'.5rem .7rem .5rem .7rem',
        '&:hover' : {
            background: '#f6f6f6'
        }
    }
});

export default useSideBarStyles;