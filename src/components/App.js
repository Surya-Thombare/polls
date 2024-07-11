import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleIntialData } from '../actions/shared'
import LeaderBoard from './leaderBoard'
import Dashboard from './dashboard'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
import AddPoll from './addPoll'

export default function App() {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleIntialData())
  }, [dispatch])

  console.log(store, 'Store');
  return (
    <Router>
      <div className='container'>
        {loading === true
          ? null
          : <div>
            <AddPoll />
          </div>
        }
      </div>
    </Router>
  )
}