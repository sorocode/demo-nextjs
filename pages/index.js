import { useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [postResponse, setPostResponse] = useState(null);

  // Fetch data from /api/hello
  const fetchApiData = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  // Send data to /api/hello (POST method)
  const sendPostRequest = async () => {
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputValue }),
      });
      const data = await response.json();
      setPostResponse(data.message);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Next.js API Frontend</h1>

      {/* Fetch API Data */}
      <section>
        <h2>Fetch Data from API</h2>
        <button onClick={fetchApiData} style={{ marginBottom: "1rem" }}>
          Fetch API
        </button>
        {apiResponse && <p>API Response: {apiResponse}</p>}
      </section>

      {/* Post Data to API */}
      <section>
        <h2>Send Data to API</h2>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <button onClick={sendPostRequest}>Send</button>
        {postResponse && <p>Post Response: {postResponse}</p>}
      </section>
    </div>
  );
}
