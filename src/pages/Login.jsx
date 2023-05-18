import styles from './Login.module.css';
import img from '../assets/context.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [correctLogin, setCorrectLogin] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        // expiresInMins: 60, // optional
      }),
    });
    const json = await response.json();
    setLoading(false);
    if (json.message) {
      setCorrectLogin(true);
      setError(json.message);
      return json.message;
    } else {
      navigate('/feed');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="logo" />
        {correctLogin && <div style={{ color: 'red' }}>{error}</div>}
        <form action="" className={styles.form} onSubmit={handleFormSubmit}>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Phone number, username, or email"
          />
          <input
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {loading ? (
            <button className={styles.loadingButton}>Loading..</button>
          ) : (
            <button className={styles.button}>Log in</button>
          )}
        </form>
        <div className={styles.separator}>
          <span>OR</span>
        </div>
        <Link className={styles.facebook} to="https://www.facebook.com/">
          <i className="fab fa-facebook-square"></i> Log in with Facebook
        </Link>
        <div className={styles.forget}>Forgot Password?</div>
      </div>
    </div>
  );
}
