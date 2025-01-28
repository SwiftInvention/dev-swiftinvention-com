import emailIcon from '~/assets/images/email.svg';
import linkedInIcon from '~/assets/images/linkedIn.svg';
import Alex2x from '~/assets/images/new/teamMembers/Alex-2x.png';
import Alex from '~/assets/images/new/teamMembers/Alex.png';
import Maria2x from '~/assets/images/new/teamMembers/Maria-2x.png';
import Maria from '~/assets/images/new/teamMembers/Maria.png';
import Paul2x from '~/assets/images/new/teamMembers/Paul-2x.png';
import Paul from '~/assets/images/new/teamMembers/Paul.png';
import Samaya2x from '~/assets/images/new/teamMembers/Samaya-2x.png';
import Samaya from '~/assets/images/new/teamMembers/Samaya.png';
import Sergey2x from '~/assets/images/new/teamMembers/Sergey-2x.png';
import Sergey from '~/assets/images/new/teamMembers/Sergey.png';

const teamMembers = [
  {
    name: 'Samaya Habibova',
    position: 'CEO',
    description:
      'Head of business development. Legal-tech entrepreneur, CEO of E-Legal. Lawyer and Ph.D candidate.',
    place: 'Cupertino, California.',
    photo: Samaya.src,
    photo2x: Samaya2x.src,
    email: 'shabibova@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/samayahabibova/',
  },
  {
    name: 'Sergey Kucherenko',
    position: 'CTO',
    description:
      'Head of engineering. Solution architect, technical lead for enterprise & consumer applications.',
    place: 'Portugal.',
    photo: Sergey.src,
    photo2x: Sergey2x.src,
    email: 'skucherenko@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/sergey-kucherenko-514a37100/',
  },
  {
    name: 'Maria Vasyutenko',
    position: 'Client Partner',
    description:
      'Head of client engagement. Project manager, product manager, and business analyst.',
    place: 'Romania.',
    photo: Maria.src,
    photo2x: Maria2x.src,
    email: 'mvasuytenko@swiftinvention.com',
    linkedIn: '',
  },
  {
    name: 'Alex Yuhimenko',
    position: 'Chief Architect',
    description:
      'Software Architect with 20 years in scalable systems, cloud architecture, identity, and privacy.',
    place: 'Portugal.',
    photo: Alex.src,
    photo2x: Alex2x.src,
    email: 'ayuhimenko@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/alexander-yuhimenko-75b41846/',
  },
  {
    name: 'Paul Trevithick',
    position: 'Founder',
    description:
      'Founder of Swift Invention. Serial tech entrepreneur, privacy advocate. MIT-trained engineer.',
    place: 'Boston, Massachusetts.',
    photo: Paul.src,
    photo2x: Paul2x.src,
    email: 'ptrevithick@swiftinvention.com',
    linkedIn: 'https://www.linkedin.com/in/paultrevithick/',
  },
];

export const Team = () => {
  return (
    <div className="px-4 md:px-20 py-16 lg:py-32 text-secondaryCol1 bg-surface">
      <div>
        <h2 className="font-bold text-4xl">Leadership Team</h2>
        <p className="pt-5 pb-16 text-xl md:text-xl-desktop text-secondaryCol1/85 max-w-15xl">
          We know how to take ideas from concept to reality. Be sure your
          projects will be completed with a dedicated team, the highest quality,
          and on-time.
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden flex flex-col rounded-xl bg-gradient-to-b from-transparent to-primaryCol3WithOpacity"
            >
              <div className="team-member-photo w-60 h-60 rounded-full mb-5 lg:mb-0">
                <img
                  className="w-60 h-60 object-cover rounded-full"
                  src={member.photo}
                  srcSet={`${member.photo} 1x, ${member.photo2x} 2x`}
                  alt={member.name}
                />
              </div>
              <div className="m-8">
                <div className="text-xl md:text-xl-desktop font-bold">
                  {member.name}
                </div>
                <div className="mb-4 text-xl md:text-xl-desktop font-medium opacity-80">
                  {member.position}
                </div>
                <hr className="border-secondaryCol1 opacity-10 border-1 mb-4" />
                <div className="mt-4 min-h-28 text-lg text-secondaryCol1/85">
                  {member.description}
                  <div className="italic">{member.place}</div>
                </div>
                <div className="mt-4 flex text-lg font-inter">
                  <a href={member.linkedIn} className="mr-4">
                    <img src={linkedInIcon.src} alt={member.name} />
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <img src={emailIcon.src} alt={member.email} />
                  </a>
                </div>
              </div>
              <div className="team-member-glow absolute h-full w-full top-[40%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
