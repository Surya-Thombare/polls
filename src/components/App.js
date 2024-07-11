import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Leaderboard from './leaderBoard'
import Dashboard from './dashboard'
import AddPoll from './addPoll'
import Nav from './nav'
import Poll from './Poll'
// import AddPoll from './AddPoll'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className='container'>
        <Nav />
        {loading === true
          ? null
          : <div>
            <Route path='/' exact >
              <Dashboard />
            </Route>
            <Route path='/leaderboard' exact >
              <Leaderboard />
            </Route>
            <Route path='/add' exact >
              <AddPoll />
            </Route>
            <Route path='/polls/:id' exact >
              <Poll />
            </Route>
          </div>
        }
      </div>
    </Router>
  )
}