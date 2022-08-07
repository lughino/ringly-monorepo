export const BioImage: React.FC<{ url: string | null }> = ({ url }) => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover flex justify-center items-center rounded-full w-20 h-20 sm:w-28 sm:h-28 my-0 mx-auto"
        style={{
          backgroundImage: !url ? 'none' : `url("${url}")`,
        }}
      ></div>
    </div>
  );
};
