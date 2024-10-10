import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [loading, setloading] = useState(false);
  const [quote, setquote] = useState(null);

  async function fetchquote() {
    try {
      setloading(true);
      const apiResponse = await fetch('https://api.quotable.io/quotes/random', {
        method: 'GET'
      });
      const result = await apiResponse.json();
      console.log(result)
      if (result && result.length > 0) {
        setloading(false);
        setquote(result[0]);
      }
    }
    catch (e) {
      console.log(error)
    }
  }
  useEffect(() => {

  }, [])
  function handleRefresh(){
    fetchquote();
  }

  if(loading){
    return <h3 className='text-center mt-10'>Loading Quote please wait !</h3>
  } 

  return (
    <div className="random-quote-generator flex justify-center flex-col">
      <div className='quote-wrapper mt-8 m-6 p-4 w-fit h-fit border-2 border-amber-300 bg-stone-100 place-self-center text-slate-950 shadow-md shadow-slate-700 rounded-sm'>
        <p className='font-lexend font-bold'>Author : {quote?.author}</p>
        <p className='font-ubuntu line-clamp-5'>Quote : {quote?.content}</p>
      </div>
      <button className="px-4 py-2 rounded-md mt-6 w-fit h-fit bg-slate-950 text-gray-50 hover:bg-gray-400 hover:text-slate-950 place-self-center font-lexend shadow-md shadow-black" onClick={handleRefresh}>Generate Quote</button>
    </div>
  );
}

export default App;
