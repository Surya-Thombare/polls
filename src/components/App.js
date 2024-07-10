import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleIntialData } from '../actions/shared'

export default function App() {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleIntialData())
  }, [dispatch])

  console.log(store, 'Store');
  return (
    <div className='container'>
      {loading === true
        ? null
        : <div>
          Redux polls
        </div>
      }
    </div>
  )
}