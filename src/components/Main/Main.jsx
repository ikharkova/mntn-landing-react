import MainSection from '../MainSection/MainSection';
import './Main.css';

const Main = () => {
  const sections = [
    { number: '01' },
    { number: '02', reversed: true },
    { number: '03' },
  ];

  return (
    <main className="main">
      <div className="container">
        {sections.map((e) => <MainSection number={e.number} reversed={e.reversed} />)}
      </div>
    </main>
  )
};

export default Main;