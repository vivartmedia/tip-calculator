
'use client'
// import { button } from "flowbite-react";
import { Container } from "postcss";
import { Card } from "flowbite-react";
import React, { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(true);
  const [bill, setBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const [selectedTip, setSelectedTip] = useState<number>(0);

  // Tip percentages to choose from
  const tipPercentages = [5, 10, 15, 25, 50];

  // Function to handle tip selection
  const handleTipSelection = (percentage: number) => {
    setSelectedTip(percentage);
    setCustomTip(0); // Reset custom tip if a predefined tip is selected
  };


  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Parse float to convert input value to number
    const inputVal = parseFloat(e.target.value) || 0;
    setBill(inputVal)

  };

  // const handleTipSelection = (percentage: number) => {
  //   setTipPercentage(percentage);
  //   // Reset customTip if one of the preset buttons is used
  //   setCustomTip(0);
  // };

  // Handle input for custom tip amount
  const handleCustomTipInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(parseFloat(e.target.value));
    setSelectedTip(0); // Reset selected tip percentage if custom tip is used
  };

  // Function to handle input for the number of people
  const handleNumberOfPeopleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert input value to number and prevent it from being less than 1
    const numPeople = Math.max(1, parseInt(e.target.value, 10) || 1);
    setNumberOfPeople(numPeople);
  };


  const calculateTipAndTotal = () => {
    const tipValue = selectedTip > 0 ? (bill * selectedTip) / 100 : customTip;
    const totalTipAmountPerPerson = tipValue / numberOfPeople;
    const totalAmountPerPerson = (bill + tipValue) / numberOfPeople;

    setTipAmountPerPerson(totalTipAmountPerPerson);
    setTotalPerPerson(totalAmountPerPerson);
  };

  // This could be triggered by an effect or a "Calculate" button
  React.useEffect(() => {
    calculateTipAndTotal();
  }, [bill, selectedTip, customTip, numberOfPeople]);


  const resetForm = () => {
    setBill(0);
    setSelectedTip(0);
    setCustomTip(0);
    setNumberOfPeople(1);
    // Optionally reset tipAmountPerPerson and totalPerPerson if you want to clear those fields as well
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
  };


  return (<>
    <main className="flex min-h-screen flex-col items-center p-5 md:p-20 bg-LGcyan">

      <header className="my-14">
        <h1 className="space-mono-bold text-3xl text-VDcyan">S P L I</h1>
        <h1 className="space-mono-bold text-3xl text-VDcyan">T T E R</h1>
      </header>

      <Card className="xl:w-900px xl:h-600px rounded-3xl overflow-hidden bg-VLGcyan">
        <div className="grid xl:grid-cols-2 h-full ">
          <div className="flex flex-col justify-between p-8">

            <div className="mb-5 grid">
              <label className="space-mono-bold text-xl text-VDcyan" htmlFor="">Bill</label>
              <div className="relative flex items-center bg-slate-100 rounded-md">
                <span className="absolute left-0 pl-3 text-gray-500"></span>
                <input
                  value={bill.toString()} // Convert bill state to string for input value
                  type="text" // Keeping as text to match your use of onInput for custom handling
                  className="w-full text-2xl text-VDcyan space-mono-bold rounded-md border-0 bg-slate-100 pl-5 pr-3 py-2 text-right hover:border-1 hover:border-Scyan outlin"
                  style={{
                    backgroundImage: `url('/assets/icon-dollar.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left 10px center',
                    backgroundSize: '11px 17px',
                  }}
                  placeholder="0"
                  onChange={handleBillInput} // Use onChange for React convention
                />
              </div>
            </div>


            <div className="">
              <label className="space-mono-bold text-xl text-VDcyan mb-4 block">Select Tip %</label>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Map over your percentages to create buttons */}
                {tipPercentages.map((percentage, index) => (
                  <button
                    key={index}
                    className="w-28 h-12 hover:bg-S2cyan hover:text-VDcyan space-mono-bold text-xl bg-VDcyan text-VLGcyan rounded-md"
                    onClick={() => handleTipSelection(percentage)}>
                    {percentage}%
                  </button>
                ))}

                {/* Custom Tip Input */}
                {/* Ensuring it takes up a full column; it will automatically wrap to the next line on smaller screens */}
                <input
                  type="number"
                  value={customTip > 0 ? customTip.toString() : ''}
                  onChange={handleCustomTipInput}
                  className="xl:col-span-1 w-28 h-12 text-xl text-VDcyan space-mono-bold rounded-md border-0 bg-slate-100 pl-5 pr-3 py-2 text-center hover:border-2 hover:border-Scyan"
                  placeholder="Custom Tip"
                />
              </div>
            </div>




            <div className="mb-1 mt-5 grid">
              <label className="space-mono-bold text-xl text-VDcyan" htmlFor="numberOfPeople">Number of People</label>
              <div className="relative flex items-center">
                <span className="absolute left-0 pl-3 text-gray-500">
                  <img src="/assets/icon-person.svg" alt="People Icon" style={{ width: '15px', height: '17px' }} />
                </span>
                <input
                  id="numberOfPeople"
                  type="number"
                  value={numberOfPeople.toString()}
                  onChange={handleNumberOfPeopleInput}
                  className="w-full text-2xl text-VDcyan space-mono-bold rounded-md border-0 bg-slate-100 pl-10 pr-3 py-2 text-right hover:border-2 hover:border-Scyan"
                  placeholder="0"
                  min="1" // Ensure you can't go below 1 person
                />
              </div>
            </div>

          </div>


          <div className="bg-VDcyan flex flex-col justify-between   rounded-2xl m-4  p-8">

            <div className="">
              <div className="flex justify-between w-full mb-4 ">
                <div>
                  <div>
                    <p className="text-xl space-mono-bold text-LGcyan">Tip Amount</p>
                  </div>
                  <div><p className="text-md space-mono-bold text-Gcyan">/ person</p></div>
                </div>
                {/* Display Tip Amount Per Person */}
                <div>
                  <p className="text-md text-Scyan text-5xl space-mono-bold ">
                    ${tipAmountPerPerson.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between w-full mb-4">
                <div>
                  <div>
                    <p className="text-xl space-mono-bold text-LGcyan">Total</p>
                  </div>
                  <div><p className="text-md space-mono-bold text-Gcyan">/ person</p></div>
                </div>
                {/* Display Total Per Person */}
                <div>
                  <p className="text-md text-Scyan text-5xl space-mono-bold ">
                    ${totalPerPerson.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>


            <div className="flex justify-center ">
              <button
                onClick={resetForm}
                className={`
              w-full h-11 space-mono-bold text-xl rounded-md
              ${bill > 0 ? 'hover:bg-S2cyan hover:text-VDcyan bg-Scyan text-VLGcyan' : 'bg-D2Gcyan text-VDcyan cursor-not-allowed'}
            `}
                disabled={bill <= 0}
              >
                Reset
              </button>
            </div>
            {/* </div> */}

            {/* </div> */}
          </div>
        </div>
      </Card>

    </main>
  </>

  );
}


