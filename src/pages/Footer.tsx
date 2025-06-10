export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-32 bg-sky-950 text-white flex justify-center items-center">
      <div className="text-center">
        <p className="text-xl font-bold">Christian</p>
        <p>&copy; All right reserve {year}</p>
      </div>
    </footer>
  );
}
