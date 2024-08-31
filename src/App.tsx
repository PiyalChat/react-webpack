import './styles.css'
import IMAGE from './react.png'
import ClickCounter from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>React webpack learnings</h1>
      <h3>
        Rendering the env {process.env.NODE_ENV} {process.env.name} on visit
      </h3>
      <img src={IMAGE} alt="react-logo" />

      <ClickCounter />
    </>
  )
}
