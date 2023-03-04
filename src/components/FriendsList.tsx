import FriendComponent from "./Friend";

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface Props {
  friendlist: Friend[];
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null; // Allow null values
}

function FriendsList({ friendlist, onSelection, selectedFriend}: Props) {
  return (
    <div>
      <h1 style={{color: '#b86361'}}>Friends List</h1>
      <ul>
        {friendlist.map((friend) => (
          <FriendComponent
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend} // Can be null now
        />
        
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
