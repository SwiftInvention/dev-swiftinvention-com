export const WorkStages = ({
  stages,
  title,
  description,
}: {
  stages: {
    name: string;
    body: string;
  }[];
  title: string;
  description: string;
}) => {
  return (
    <div className="container py-16 text-secondaryCol1 lg:py-32">
      <div>
        <div className="my-16 md:my-28 lg:my-32">
          <h2 className="mb-5 text-4xl font-bold">{title}</h2>
          <p className="text-xl text-secondaryCol1/85">{description}</p>
          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ name, body }, idx) => (
              <div key={idx}>
                <div className="transparent-number relative -bottom-20 z-0 text-[180px] font-bold leading-[218px]">
                  {idx + 1}
                </div>
                <h3 className="relative z-10 text-2xl font-bold">{name}</h3>
                <p className="relative z-10 text-lg text-secondaryCol1/85">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStages;
