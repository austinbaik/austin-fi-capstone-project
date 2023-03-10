import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//adding a github change 


// validate :must_have_flatiron_email

// def must_have_flatiron_email
//   unless email.match?(/flatironschool.com/)
//     errors.add(:email, "We're only allowed to have people who work for the company in the database!")
//   end
// end