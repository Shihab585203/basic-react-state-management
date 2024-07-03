type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ count, setCount }: TProps) => {
  return (
    <div className=" flex h-96 m-14 border-4 border-red-600 justify-center items-center">
      <button
        type="button"
        className="bg-red-500 px-6 py-2 font-semibold text-black text-xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default Counter;
