import React, { useState } from 'react';
// Assuming you have these imports correctly set up
// import { Card } from "flowbite-react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(parseFloat(e.target.value));
  };

  const handleTipSelection = (percentage: number) => {
    setTipPercentage(percentage);
    // Reset customTip if one of the preset buttons is used
    setCustomTip(0);
  };

  const handleCustomTipInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customTipValue = parseFloat(e.target.value);
    setCustomTip(customTipValue);
    // Reset tipPercentage if custom tip is used
    setTipPercentage(0);
  };

  const handleNumberOfPeopleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(parseFloat(e.target.value));
  };

  const calculateTipAndTotal = () => {
    const tipValue = tipPercentage > 0 ? (bill * tipPercentage) / 100 : customTip;
    const totalTipAmountPerPerson = tipValue / numberOfPeople;
    const totalAmountPerPerson = (bill + tipValue) / numberOfPeople;

    setTipAmountPerPerson(totalTipAmountPerPerson);
    setTotalPerPerson(totalAmountPerPerson);
  };

  // This could be triggered by an effect or a "Calculate" button
  React.useEffect(() => {
    calculateTipAndTotal();
  }, [bill, tipPercentage, customTip, numberOfPeople]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-20 bg-LGcyan">
        {/* Your component structure */}
        {/* Bill Input */}
        <input
          type="number"
          value={bill.toString()}
          onChange={handleBillInput}
          placeholder="Bill Amount"
        />

        {/* Tip Percentage Buttons */}
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button key={percentage} onClick={() => handleTipSelection(percentage)}>
            {percentage}%
          </button>
        ))}

        {/* Custom Tip Input */}
        <input
          type="number"
          value={customTip > 0 ? customTip.toString() : ''}
          onChange={handleCustomTipInput}
          placeholder="Custom Tip"
        />

        {/* Number of People Input */}
        <input
          type="number"
          value={numberOfPeople.toString()}
          onChange={handleNumberOfPeopleInput}
          placeholder="Number of People"
        />

        {/* Display Results */}
        <div>Tip Amount / Person: ${tipAmountPerPerson.toFixed(2)}</div>
        <div>Total / Person: ${totalPerPerson.toFixed(2)}</div>

        {/* Existing elements in your component */}
      </main>
    </>
  );
}
