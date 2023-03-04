import "./App.css";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

const initialFriends: Friend[] = [
  { id: 118836, name: "Clark", image: "https://i.pravatar.cc/48?u=118836", balance: -7 },
  { id: 933372, name: "Sarah", image: "https://i.pravatar.cc/48?u=933372", balance: 20 },
  { id: 499476, name: "Anthony", image: "https://i.pravatar.cc/48?u=499476", balance: 0 },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends); 
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleSelectFriend = (friend: Friend) => {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend)); // Toggle selection
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => { 
    setFriends((prevFriends) => 
      prevFriends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value } 
          : friend
      )
    );
    setSelectedFriend(null); // Reset selected friend
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          friendlist={friends} 
          onSelection={handleSelectFriend} 
          selectedFriend={selectedFriend} 
        />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={() => setShowAddFriend((prev) => !prev)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill name={selectedFriend.name} onSplitBill={handleSplitBill} /> // 
      )}
    </div>
  );
}
