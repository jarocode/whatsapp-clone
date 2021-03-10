import { createUseStyles } from 'react-jss';

const useChatContentStyles = createUseStyles({
    
    chatBackground : {
        background: 'url("../../assets/images/whatsapp-chat-bg.png") no-repeat center/cover',
        position: 'fixed', 
        top: '4rem', 
        left: '25rem', 
        height: '100%', 
        width: '100%'
    }
});

export default useChatContentStyles;
