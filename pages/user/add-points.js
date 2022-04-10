import { useState } from "react";
import { useUserDispatchContext } from "../../context/UserContext";

export default function AddPoints() {
  const [points, setPoints] = useState(1000);
  const dispatch = useUserDispatchContext();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const fetcher = await fetch("/api/add-points", {
          method: "POST",
          body: JSON.stringify({
            amount: points,
          }),
        });
        const response = await fetcher.json();
        console.log(response);
        dispatch({ type: "ADD_POINTS", payload: points });
      }}
    >
      <label htmlFor="addPointSelector">Add Points</label>
      <select
        name="addPointSelector"
        id="addPointSelector"
        onChange={(e) => setPoints(e.target.value)}
      >
        <option value="1000">1000</option>
        <option value="5000">5000</option>
        <option value="7500">7500</option>
      </select>
      <button>Add Points</button>
    </form>
  );
}
// This is working : )
// I need to styled and add the fetch method to the component.
