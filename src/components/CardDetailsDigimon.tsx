const CardDetailsDigimon = ({ datosDigimon }: any) => {
  return (
    <>
      <div className=" m-7 bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            className="object-center object-cover rounded-full h-40 w-40"
            src={datosDigimon.img}
            alt={`imagen_${datosDigimon.name}`}
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-orange-500 font-bold mb-2">{datosDigimon.name}</p>
          <p className="text-base text-gray-200 font-normal">
            Nivel: {datosDigimon.level}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetailsDigimon;
