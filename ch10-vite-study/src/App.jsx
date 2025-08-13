import './App.css';
import LunchMatchTemplate from './component/LunchMatchTemplate.jsx';
import LunchMatchInsert from './component/LunchMatchInsert.jsx';

function App() {
  return (
    <>
      <h1 className="study">오늘 점심 뭐 먹지?</h1>
      <LunchMatchTemplate>
        <LunchMatchInsert />
      </LunchMatchTemplate>
    </>
  );
}

export default App;
