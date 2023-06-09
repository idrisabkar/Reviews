import { FaQuoteRight } from 'react-icons/fa'

export function Profile() {
  return (
    <>
      <div className="profile">
        <div id="icon">
          <FaQuoteRight className="icon" />
        </div>
        <div className="shadow w-h">.</div>
        <div className="image">
          <img className="w-h" src="./images/pr-02.jpg" alt="profile" />
        </div>
      </div>
    </>
  )
}
