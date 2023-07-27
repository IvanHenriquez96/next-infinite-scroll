const CardDetailsDigimon = ({ datosDigimon }: any) => {
  return (
    <div className="mx-auto">
      <img
        src={datosDigimon.img}
        alt={`imagen_${datosDigimon.name}`}
        className="rounded-full"
      />
      <p>- {datosDigimon.name}</p>
    </div>
  );
};

export default CardDetailsDigimon;
