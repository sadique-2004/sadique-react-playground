import { useState } from 'react'
import BackgroundImage from "./assets/money.jpg"
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmunt] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmunt(amount)
    setAmount(convertedAmount)

  }

  const convert = () => {
    setConvertedAmunt(amount * currencyInfo[to])
  }

  return (
    <>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${BackgroundImage}')` }}
      >

<p className='text-center text-6xl  text-green-400 font-bold border py-4 px-4 bg-green/30  backdrop-blur-sm rounded-lg '>Currency Converter</p>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  selectedCurrency={from}
                  onCurrencyChange={(currency) => {
                    setFrom(currency)
                    setAmount(amount)
                  }}
                  onAmountChange={(amount)=>{
                    setAmount(amount)
                  }}
                  selectCurrency={from}

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-500 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectedCurrency={to}
                  onCurrencyChange={(currency) => {
                    setTo(currency)
                    setAmount(amount)
                  }}
                  selectCurrency={from}
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white px-4 py-3 rounded-lg cursor-pointer">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
