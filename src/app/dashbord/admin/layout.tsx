export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      {children}
    </div>
  );
}
