import React from 'react';
import App from './app/App';
// mock service worker 
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from './tests-utils'


// TESTS OK 15/06/22 IF REDOING TESTS IS NEEDED, MAKE SURE THE GRAB THE RIGHT STRINGS TO EXPECT BY CHECKING THE JSON ENDPOINTS FIRST


// We use msw to intercept the network request during the test,
// and return the response a mock post after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
    rest.get('/r/Home', (req, res, ctx) => {
        if (!mock) return res.forward()
            return res(ctx.json({mocked: true})) 
    }) 
  ]


const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


test('fetches & receives posts in home page', async () => {
    render(<App />)

    // See what we're supposed to receive first and change title accordingly. (reddit.com/r/Home.json)
    expect(await screen.findByText(/drywall dropped off/i)).toBeInTheDocument()
  })

  test('fetches & receives subreddits in home page', async () => {
    render(<App />)

    // See what we're supposed to receive first and change title accordingly. (reddit.com/subreddits.json)
    expect(await screen.findByText(/AskReddit/i)).toBeInTheDocument()
  })

  test('changes posts when we select a different subreddit', async () => {
    render(<App />)

    fireEvent.click(await screen.findByText(/AskReddit/i))
    // See what we're supposed to receive first and change title accordingly. (reddit.com/r/AskReddit.json)
    expect(await screen.findByText(/confession/i)).toBeInTheDocument()
  })

  // check comments appear just fine
  test('comments appear on toggle', async () => {
    render(<App/>)
    fireEvent.click(await screen.findByText(/movies/i))
    fireEvent.click(await screen.findByRole('button', {name: /Show Comments vctevv/i}))
    // leave the time to upload, or it just tries to grab the skeleton
    const myTimeout = setTimeout(expect(await screen.findByText(/In addition to SHUDDER/i)).toBeInTheDocument(), 10000);
  })

  test('comments disappear on toggle', async () => {
    render(<App/>)

    fireEvent.click(await screen.findByRole('button', {name: /Show Comments vctevv/i}))
    fireEvent.click(await screen.findByRole('button', {name: /Show Comments vctevv/i}))
    expect(await screen.queryByText(/In addition to SHUDDER/i)).not.toBeInTheDocument()

  })
  

const thunk =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }

  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }

describe('Testing middleware', () => {
    test('passes through non-function action', () => {
        const { next, invoke } = create()
        const action = { type: 'TEST' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      })
      
      test('calls the function', () => {
        const { invoke } = create()
        const fn = jest.fn()
        invoke(fn)
        expect(fn).toHaveBeenCalled()
      })
      
      test('passes dispatch and getState', () => {
        const { store, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch('TEST DISPATCH')
          getState()
        })
        expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
        expect(store.getState).toHaveBeenCalled()
      })
})

