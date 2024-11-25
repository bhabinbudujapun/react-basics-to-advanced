import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  );
}

export default App;
