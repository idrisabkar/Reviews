import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export function NextPrevious(props) {
  return (
    <p className="controlers">
      <FaChevronLeft
        className="controler"
        id="previous"
        onClick={props.handlePrevious}
      />
      <FaChevronRight
        className="controler"
        id="next"
        onClick={props.handleNext}
      />
    </p>
  )
}
