import bg1 from '~/assets/images/1-bg.png';
import bg2 from '~/assets/images/2-bg.png';
import bg3 from '~/assets/images/3-bg.png';
import bg4 from '~/assets/images/4-bg.png';
import bg5 from '~/assets/images/5-bg.png';

const indexImages = [bg1.src, bg2.src, bg3.src, bg4.src, bg5.src];

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
    <div className="px-4 py-16 text-secondaryCol1 md:px-20 lg:py-32">
      <div>
        <div className="my-16 md:my-28 lg:my-32">
          <h2 className="mb-5 text-4xl font-bold">{title}</h2>
          <p className="pb-16 text-xl text-secondaryCol1/85">{description}</p>
          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ name, body }, idx) => (
              <div
                key={idx}
                style={{ backgroundImage: `url(${indexImages[idx]})` }}
                className={`bg-left-top-2 bg-no-repeat pt-34`}
              >
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-lg text-secondaryCol1/85">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStages;
