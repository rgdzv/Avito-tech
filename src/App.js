import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss'
import List from './components/list/List'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ModalContainer from './containers/ModalContainer'
import { getPhotos, openModal } from './redux/actions/actions'

const App = () => {

  const { isFetching, error } = useSelector(({ photos }) => photos)
  const photos = useSelector(({ photos }) => photos.photos)
  const { isOpen } = useSelector(({ modal }) => modal)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPhotos())
  }, [])

  const getBigPhoto = (id) => {
    dispatch(openModal(id))
  }

  return (
    <div className="container">
      <Header>Test App</Header>
      <div className="list__content">
        {isFetching 
          ? <p>Loading...</p>
          : error 
          ? <p>{error}</p>
          : photos.map(({ id, url }) => (
              <List
                key={id}
                src={url}
                onClick={() => getBigPhoto(id)}
              />
            ))
        }
      </div>
      <Footer>&copy; 2019-2020</Footer>
      {isOpen && <ModalContainer />}
    </div>
  )
} 

export default App
