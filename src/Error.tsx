import { Navigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
function Error() {
  return (
    <>
      <Navigate to="/" />
    </>
  )
}

export default Error