import React, { useState } from "react";

function encrypt(message, key) {
  let cipherText = "";

  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    charCode = (charCode + key) % 256;
    cipherText += String.fromCharCode(charCode);
  }

  return cipherText;
}

function decrypt(cipherText, key) {
  let message = "";

  for (let i = 0; i < cipherText.length; i++) {
    let charCode = cipherText.charCodeAt(i);
    charCode = (charCode - key + 256) % 256;
    message += String.fromCharCode(charCode);
  }

  return message;
}

function CipherPuzzle() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(0);
  const [cipherText, setCipherText] = useState("");
  const [decryptedText, setdecryptedText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCipherText(encrypt(message, key));
    setdecryptedText(decrypt(encrypt(message, key), key));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Key:
          <input
            type="number"
            value={key}
            onChange={(e) => setKey(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Encrypt</button>
      </form>
      {cipherText && (
        <div>
          <p>Cipher Text: {cipherText}</p>
        </div>
      )}
      {decryptedText && (
        <div>
          <p>Decrypted Text: {decryptedText}</p>
        </div>
      )}
    </div>
  );
}

export default CipherPuzzle;
