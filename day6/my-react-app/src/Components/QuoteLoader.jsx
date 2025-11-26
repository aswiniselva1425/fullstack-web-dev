import { useEffect, useState } from "react";

function QuoteLoader() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {loading && <p>Loading...</p>}

      {!loading && quote && (
        <>
          <h2 style={{ fontStyle: "italic" }}>"{quote.content}"</h2>
          <p>— {quote.author}</p>
        </>
      )}

      <button onClick={fetchQuote} style={{ marginTop: "10px" }}>
        New Quote
      </button>
    </div>
  );

}
export default QuoteLoader