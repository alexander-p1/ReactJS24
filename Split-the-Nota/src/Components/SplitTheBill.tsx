import React from 'react';
import { useState } from "react";
import BillForm from './BillForm';

// Function Component to split the bill
const SplitTheBill: React.FC = () => {
    //  useStates för inmatningar
    const [bill, setBill] = useState<string>('');
    const [friends, setFriends] = useState<string>('');
    const [tip, setTip] = useState<string>('');

    // Beräknar vad varje person ska betala
    const calculateSplit = () => {
        const billAmount = parseFloat(bill);
        const amountOfFriends = parseInt(friends);
        const tipPercentage = parseFloat(tip);

        const totalWithTip = billAmount + (billAmount * tipPercentage);
        const perPerson = totalWithTip / amountOfFriends;

        console.log(`Varje person ska betala: ${perPerson.toFixed(2)} kr.`);
        
    }

    return (
        <div className='splitBill'>
            <h2 className='title'>Split the Nota</h2>
            <BillForm 
                bill={bill}
                setBill={setBill}
                friends={friends}
                setFriends={setFriends}
                tip={tip}
                setTip={setTip}
            />
            <button className='btn' onClick={calculateSplit}>Räkna ut</button>
        </div>
    )
};

export default SplitTheBill;