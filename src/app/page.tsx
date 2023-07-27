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
    <main className="container mx-auto">
      <DigimonListBox data={data} />
    </main>
  );
}
