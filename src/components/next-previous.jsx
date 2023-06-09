import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export function NextPrevious() {
  return (
    <p className="controlers">
      <FaChevronLeft className="controler" />
      <FaChevronRight className="controler" />
    </p>
  )
}
