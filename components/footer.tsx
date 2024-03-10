export default function Footer() {
  const time: Date = new Date();

  return (
    <div className="w-full">
      <div className="border-t border-rose-100">
        <div className="p-2">
          <div className="flex justify-center">
            <p className="text-xs text-zinc-600">
              aion-solutions @ {time.toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
