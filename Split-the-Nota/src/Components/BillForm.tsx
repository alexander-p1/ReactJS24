import React from 'react'

interface IBillFormProps {
    bill: string;
    setBill: React.Dispatch<React.SetStateAction<string>>;
    friends: string;
    setFriends: React.Dispatch<React.SetStateAction<string>>
    tip: string;
    setTip: React.Dispatch<React.SetStateAction<string>>;
}

const BillForm: React.FC<IBillFormProps> = ({ bill, setBill, friends, setFriends, tip, setTip }) => {
  return (
    <div className='input-fields'>
        <input 
        type='number' 
        placeholder='Summa'
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        />

        <input 
        type='number' 
        placeholder='Antal Vänner'
        value={friends}
        onChange={(e) => setFriends(e.target.value)}
        />

        <input 
        type='number' 
        placeholder='Dricks'
        value={tip}
        onChange={(e) => setTip(e.target.value)}
        />
    </div>
  )
}

export default BillForm