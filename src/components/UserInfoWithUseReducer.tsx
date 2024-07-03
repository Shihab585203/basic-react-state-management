import { ChangeEvent, useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

type TAction = {
  type: string;
  payload: string;
}

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          className="border-2 border-red-600 mx-4"
          name="name"
          id="name"
          placeholder="text"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="number"
          className="border-2 border-red-600 mx-4"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          type="text"
          className="border-2 border-red-600 mx-4"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
        />
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoWithUseReducer;
