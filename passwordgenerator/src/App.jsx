import { useCallback, useEffect, useRef, useState } from "react";
import PassGen from "./component/PassGen";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      const element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  // Invoke passwordGenerator() function, when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  // Copy password to clipboard and Select the password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <PassGen
        password={password}
        copyPassword={copyPasswordToClipboard}
        length={length}
        setLength={setLength}
        numberAllow={numberAllow}
        setNumberAllow={setNumberAllow}
        charAllow={charAllow}
        setCharAllow={setCharAllow}
        passwordRef={passwordRef}
      />
    </>
  );
}

export default App;
