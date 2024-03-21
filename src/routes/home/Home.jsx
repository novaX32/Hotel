export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        height: '120px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#003580',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 className="headerTitle">
          <h1>Tagline Of hotel</h1>
        </h1>
        <p className="headerDesc">Description of tagline</p>
        <button className="headerBtn">Sign In/Register</button>
      </div>
    </div>
  );
}
