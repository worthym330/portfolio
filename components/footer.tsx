export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} Basant Mandal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}