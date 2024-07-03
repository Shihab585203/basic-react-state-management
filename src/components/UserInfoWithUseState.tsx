import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: 0, hobbies: [] });

  console.log(user);
  return (
    <div>
      <form>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          className="border-2 border-red-600 mx-4"
          name="name"
          id="name"
          placeholder="text"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="number"
          className="border-2 border-red-600 mx-4"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
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

export default UserInfoWithUseState;
