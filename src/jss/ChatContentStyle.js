import { createUseStyles } from 'react-jss';
import chatBg from '../assets/images/whatsapp-chat-bg.png';

const useChatContentStyles = createUseStyles({
    chatBackground : {
        background: `url(${chatBg}) no-repeat center/cover`,
        top: '4rem', 
        left: '25rem', 
        height: '100%', 
        width: '100%'
    }
});

export default useChatContentStyles;
