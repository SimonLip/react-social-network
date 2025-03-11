import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="Technologies">
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div className="Header">
      <a href="https://www.google.com">Home</a>
      <a href="https://www.google.com">News Feed</a>
      <a href="https://www.google.com">Messages</a>
      <a href="https://www.google.com">Google</a>
    </div>
  );
}

export default App;
