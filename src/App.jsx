import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/countries.jsx';


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>nadir vai loading...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;