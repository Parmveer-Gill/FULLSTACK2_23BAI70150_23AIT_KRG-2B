import { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import CounterDisplay from "./CounterDisplay";

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCount = localStorage.getItem("waterCount");
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
      } catch (err) {
        setError("Failed to fetch tip", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  const addWater = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="card">
      <Navbar />

      <h2>Water Tracker</h2>

      <CounterDisplay count={count} goal={goal} />

      <button onClick={addWater}>+</button>
      <button onClick={removeWater}>-</button>
      <button onClick={reset}>Reset</button>

      {count >= goal && <p>Goal Reached 🎉</p>}

      <div>
        <h3>Health Tip</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <p>Today’s Health Tip: {tip}</p>}
      </div>
    </div>
  );
}

export default WaterTracker;