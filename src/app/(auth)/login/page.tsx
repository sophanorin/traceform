import { loginWithEmail } from "./actions";

export default function LoginPage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          padding: 32,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 1px 4px rgba(0,0,0,.08)",
        }}
      >
        <h1 style={{ margin: "0 0 8px", fontSize: 22 }}>Traceform</h1>
        <p style={{ margin: "0 0 24px", color: "#6b7280" }}>
          Sign in with your email
        </p>
        <form action={loginWithEmail}>
          <label
            htmlFor="email"
            style={{ display: "block", fontSize: 14, marginBottom: 6 }}
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            style={{
              display: "block",
              width: "100%",
              padding: "8px 12px",
              marginBottom: 16,
              boxSizing: "border-box",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              fontSize: 15,
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 0",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Send magic link
          </button>
        </form>
      </div>
    </main>
  );
}
