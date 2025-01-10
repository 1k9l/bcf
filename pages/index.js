export default function Home() {
  // In a real app, you'd handle the transaction submission here
  // (e.g. to an /api endpoint or directly to a mempool service).
  // For now, we’re just showing the text area.

  return (
    <div
      style={{
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        minHeight: '100vh',
        margin: 0,
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Blockchain Fossils PMP</h1>
      <p style={{ textAlign: 'center', opacity: 0.8 }}>
        Paste your raw transaction hex below (to be submitted to mempool).
      </p>

      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <label
          htmlFor="rawTransaction"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}
        >
          Raw Transaction Hex
        </label>
        <textarea
          id="rawTransaction"
          name="rawTransaction"
          rows={10}
          placeholder="Paste raw transaction hex here..."
          style={{
            width: '100%',
            backgroundColor: '#2e2e2e',
            color: '#ffffff',
            border: '1px solid #555',
            borderRadius: '4px',
            padding: '0.5rem',
            fontFamily: 'monospace'
          }}
        ></textarea>

        <button
          type="button"
          onClick={() => {
            // In the future, this is where you'd handle your mempool submission.
            // For now, we simply log to console.
            const rawTx = document.getElementById('rawTransaction').value;
            console.log('Raw transaction:', rawTx);
            alert('Transaction captured (check your console).');
          }}
          style={{
            marginTop: '1rem',
            backgroundColor: '#444444',
            color: '#ffffff',
            border: 'none',
            padding: '0.75rem 1.25rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit to Mempool
        </button>
      </div>
    </div>
  );
}
