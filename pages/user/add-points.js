import { useState } from "react";
import { useUserDispatchContext } from "../../context/UserContext";

export default function AddPoints() {
  const [points, setPoints] = useState(1000);
  const dispatch = useUserDispatchContext();
  return (
    <div className="form-container">
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
      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 66px);
        }
        form {
          display: flex;
          gap: 10px;
          flex-direction: column;
          justify-content: center;
          max-width: 300px;
          text-align: center;
        }
        label {
          font-size: 1.5rem;
          font-weight: bold;
        }
        select {
          padding: 10px 20px;
        }
        button {
          padding: 10px 20px;
          border: none;
          background: var(--orange);
          color: var(--white);
        }
        button:hover {
          background: var(--orange-dark);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
// This is working : )
// I need to styled and add the fetch method to the component.
