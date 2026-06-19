export default function VerifyRequestPage() {
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
      <div style={{ textAlign: "center", padding: 32 }}>
        <h1 style={{ fontSize: 22 }}>Check your email</h1>
        <p style={{ color: "#6b7280" }}>
          A sign-in link has been sent to your email address.
        </p>
      </div>
    </main>
  );
}
