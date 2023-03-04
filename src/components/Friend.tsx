import Button from "./Button";

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface Props {
  friend: Friend;
  onSelection: (friend: Friend) => void; 
  selectedFriend?: Friend |null
}

function Friend({ friend, onSelection, selectedFriend }: Props) {
  const isSelected = selectedFriend?.id === friend.id; 

  return (
    <li className={isSelected?  "selected": ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}€</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)}€</p>}
      {friend.balance === 0 && <p className="red">You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}

export default Friend;
