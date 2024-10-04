function PassGen({
  password,
  copyPassword,
  length,
  setLength,
  numberAllow,
  setNumberAllow,
  charAllow,
  setCharAllow,
  passwordRef,
}) {
  return (
    <>
      <div className="flex items-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
          <h1 className="text-white text-center text-black font-semibold text-lg my-3">
            Password Generator
          </h1>

          {/* Password Display */}
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              className="outline-none w-full py-1 px-3"
              placeholder="PASSWORD"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyPassword}>
              copy
            </button>
          </div>

          {/* Password Options */}
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min="10"
                max="20"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="cursor-pointer"
              />
              <label>Length: {length} </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                onChange={() => {
                  setNumberAllow((prev) => !prev);
                }}
                defaultChecked={numberAllow}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="characterInput"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
                defaultChecked={charAllow}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGen;
