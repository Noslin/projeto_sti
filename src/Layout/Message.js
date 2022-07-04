import { useState, useEffect } from 'react'



import styles from './Message.module.css'

//const location = useLocation()
//let message =''
//if(location.state) {
//    message = location.state.message}
//{message && <Message type="success" msg={message}/>}


function Message ({type, msg}) {
    
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {  
        if(!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
    <>
        {visible && (
             <div className={styles.message}>
             <div className={styles[type]}>{msg}</div>
             </div>
        )}
    </>
    )
}

export default Message