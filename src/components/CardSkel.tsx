const CardSkel = () => {
  return (
    <>
      <div className=" m-7 bg-sky-900 rounded-lg p-12 flex flex-col justify-center items-center animate-pulse">
        <div className="mb-8">
          <div className="object-center object-cover rounded-full h-40 w-40 bg-gray-600"></div>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-600 bg-gray-600 rounded font-bold mb-2">
            SKELETON
          </p>

          <p className="text-xl text-gray-600 bg-gray-600 rounded font-normal">
            Nivel: SKELETON
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSkel;
