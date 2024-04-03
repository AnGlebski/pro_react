import './styles/index.scss'
import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Главная странца</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
