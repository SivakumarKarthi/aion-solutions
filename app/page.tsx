import { Map } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="flex items-center h-dvh bg-field bg-bottom">
        <div className="mx-16">
          <h1 className="font-bold md:text-5xl text-4xl text-rose-100">
            Composting today,
            <br />
            for tomorrow.
          </h1>
        </div>
      </div>

      <div>
        <Map />
      </div>
    </main>
  );
}
