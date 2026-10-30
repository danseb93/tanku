import './App.css'
import GiftSenderScreen from './features/gift-sender/screens/GiftSender.screen'

function App() {
  return (
    <>
<GiftSenderScreen onCompleteFlow={() => console.log('Flow completed')} />
    </>
  )
}

export default App
