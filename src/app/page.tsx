import DigimonListBox from "@/components/DigimonListBox";

async function getData() {
  const res = await fetch(
    // `https://digimoncard.io/api-public/getAllCards.php?sort=cardnumber`
    `https://digimon-api.vercel.app/api/digimon`
  );
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="bg-sky-700">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 py-7">
          IHENRIQUEZ - INFINITE SCROLL
        </h1>
        <DigimonListBox data={data} />
      </div>
    </main>
  );
}
