import React from "react";

const teamMembers = [
  {
    name: "Priyanshu Jha",
    role: "Role1",
    img: "https://via.placeholder.com/150", 
    bgColor: "bg-orange-200",
  },
  {
    name: "Ananya Mehta",
    role: "Role3",
    img: "https://via.placeholder.com/150",
    bgColor: "bg-red-200",
  },
  {
    name: "Ayushman Das",
    role: "Role4",
    img: "https://via.placeholder.com/150",
    bgColor: "bg-green-200",
  },
  {
    name: "Mridul Miglani",
    role: "Role2",
    linkedin: "url",
    img: "https://via.placeholder.com/150",
    bgColor: "bg-blue-200",
    
  },
  
];

const Team = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Our Capstone Development Team
        </h2>
        <p className="text-gray-400 mb-10">
            Meet the team that made this project possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${member.bgColor}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
