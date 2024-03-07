import { Map } from "@/components";

export default function Home() {
  return (
    <main className="text-rose-100">
      <div className="flex items-center h-dvh bg-field bg-bottom">
        <div className="mx-16">
          <h1 className="font-bold md:text-5xl text-4xl">
            Composting today,
            <br />
            for tomorrow.
          </h1>
        </div>
      </div>

      <div>
        <div className="p-8">
          <h1 className="font-bold md:text-3xl text-2xl">Our depositories</h1>

          <p>Locate your nearest composting depository.</p>
        </div>

        <Map
          center={{ lat: -28.061107159470325, lng: 153.36120285364683 }}
          zoom={16}
          style={{ width: "100%", height: "50dvh" }}
        />
      </div>
    </main>
  );
}
