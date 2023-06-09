import { Profile } from './profile'
import { PersonName } from './name'
import { Job } from './job'
import { Text } from './text'

export function Review() {
  return (
    <div id="review-container">
      <Profile />
      <PersonName />
      <Job />
      <Text />
    </div>
  )
}
