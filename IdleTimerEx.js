import React,{useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
// import { toast } from "react-toastify"
import Modal from 'react-modal'

// toast.configure();
Modal.setAppElement('#root');
 
function IdleTimerEx() {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const idleTimer = useRef(null);
    const sessionTimeOutRef = useRef(null);

    const onIdleFuc = () => {
        console.log('Idle');
        setmodalIsOpen(true);
        sessionTimeOutRef.current=setTimeout(logOut,5000)
    }

    const closeIt = () => {
        setmodalIsOpen(false)
    };

    const stayActive = () => {
        //  toast.success("Active Now");
        setmodalIsOpen(false);
        clearTimeout(sessionTimeOutRef.current);
        console.log('User is active');
    };
    const logOut = () => {
        // toast.error("Logged Out");
         setmodalIsOpen(false);
        clearTimeout(sessionTimeOutRef.current);
        setLoggedIn(false);
        
        console.log('User is logged out');
    }


    return (
        <div>
            <div>
                {
                    isLoggedIn?<h3>Hello User</h3>:<h3>Hello Guest</h3>
                }
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeIt} >
                <h2>Hello Jishnu....</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut} >Log Out</button>
                    <button onClick={stayActive} >Keep me signed in</button>
                </div>
            </Modal>
           <IdleTimer ref={idleTimer} timeout={5*1000} onIdle={onIdleFuc} /> 
        </div>
    )
}

export default IdleTimerEx
