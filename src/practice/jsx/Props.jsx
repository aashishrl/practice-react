
// Child component with multiple props and default prop
function UserProfile({ name = "Guest", age, onGreet }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age ? age : "Unknown"}</p>
      <button onClick={() => onGreet(name)}>Greet</button>
    </div>
  );
}

// Parent component
function App() {
  function greetUser(userName) {
    alert(`Hello, ${userName}! Welcome!`);
  }

  return (
    <div>
      <UserProfile name="Aisha" age={25} onGreet={greetUser} />
      <UserProfile age={30} onGreet={greetUser} /> {/* no name, uses default */}
    </div>
  );
}

export default App;
