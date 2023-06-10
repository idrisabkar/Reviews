import { FaQuoteRight } from 'react-icons/fa'

export function Profile(props) {
  return (
    <>
      <div className="profile">
        <div id="icon">
          <FaQuoteRight className="icon" />
        </div>
        <div className="shadow w-h">.</div>
        <div className="image">
          <img className="w-h" src={props.imageSrc} alt="profile" />
        </div>
      </div>
    </>
  )
}
