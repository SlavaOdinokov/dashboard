import { setClient } from '@/services/request.service'

export default cts => {
  setClient(cts.$axios)
}
