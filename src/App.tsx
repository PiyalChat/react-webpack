import "./styles.css";
import IMAGE from "./react.png";
import VITE from './vite.svg'

type Props = {};

export const App = (props: Props) => {
  return (
    <>
      <h2>React webpack learnings</h2>
      <img src={IMAGE} alt="react-logo"/>
      <img src={VITE} alt="vite-logo"/>
    </>
  );
};
