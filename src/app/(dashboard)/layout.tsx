import { redirect } from 'next/navigation'
import { auth, signOut } from '@/lib/auth'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        borderBottom: '1px solid var(--color-border)',
        padding: '0 1.5rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--color-surface)',
      }}>
        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Traceform</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
            {session.user?.email}
          </span>
          <form action={async () => { 'use server'; await signOut() }}>
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                color: 'var(--color-muted)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                padding: '0.3rem 0.75rem',
              }}
            >
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main style={{ flex: 1, padding: '2rem 1.5rem' }}>
        {children}
      </main>
    </div>
  )
}
