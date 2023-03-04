import React, { useState, useEffect } from 'react'
import Button from './Button' // Adjust the import path as necessary

interface Props {
 name: string;
 onSplitBill: (value: number) => void;
}

function FormSplitBill({ name, onSplitBill }: Props) {
    const [bill, setBill] = useState<number | ''>('');
    const [paidByUser, setPaidByUser] = useState<number | ''>('');
    const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

    // Calculate paidByFriend safely
    const paidByFriend = bill && paidByUser ? bill - paidByUser : 0; 

    // Reset form when a new friend is selected
    useEffect(() => {
        setBill('');
        setPaidByUser('');
        setWhoIsPaying('user');
    }, [name]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (bill === '' || paidByUser === '' || isNaN(paidByFriend)) return; 
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByFriend); 
    };

    return (
        <form onSubmit={handleSubmit} className="form-split-bill">
            <h2>Split a bill with {name}</h2>
            
            <label>💰 Bill value</label>
            <input 
                type="number" 
                value={bill} 
                onChange={(e) => setBill(e.target.value ? Number(e.target.value) : '')} 
            />

            <label>🧘 Your expense</label>
            <input 
                type="number" 
                value={paidByUser} 
                onChange={(e) => setPaidByUser(e.target.value ? Number(e.target.value) : '')} 
            />

            <label>🧘 {name}'s expense</label>
            <input type="text" value={paidByFriend} disabled />

            <label>🤑 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}

export default FormSplitBill;
