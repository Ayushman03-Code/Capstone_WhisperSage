import React, { useState } from "react";
import Application from "./Application";
import mridulImg from "../assets/mridul.jpg";
import ananyaImg from "../assets/ananya.jpg";
import priyanshuImg from "../assets/priyanshu.jpg";
import ayushmanImg from "../assets/ayushman.jpg"


const teamMembers = [
  {
    name: "Priyanshu Jha",
    role: "Role1",
    img: priyanshuImg,
    bgColor: "bg-orange-200",
    contribution: "Description for Priyanshu",
  },
  {
    name: "Ananya Mehta",
    role: "Role3",
    img: ananyaImg,
    bgColor: "bg-red-200",
    contribution: "Description for Ananya",
  },
  {
    name: "Ayushman Das",
    role: "Role4",
    img: ayushmanImg,
    bgColor: "bg-green-200",
    contribution: "Description for Ayushman",
  },
  {
    name: "Mridul Miglani",
    role: "Role2",
    linkedin: "https://www.linkedin.com/in/mridulmiglani/",
    img:mridulImg,
    bgColor: "bg-blue-200",
    contribution: "Description for Mridul",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    console.log("openModal called for:", member.name);
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  console.log(priyanshuImg);
  console.log("selectedMember:", selectedMember);

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
              className={`p-6 rounded-lg shadow-lg ${member.bgColor} cursor-pointer`}
              onClick={() => openModal(member)}
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

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          style={{ zIndex: 1000 }}
        >
          <div
            className={`p-8 rounded-lg shadow-lg relative ${selectedMember.bgColor} w-2/5`}
          >
            {/* w-2/5 makes the modal 40% of the screen width */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-white"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
              {selectedMember.name}
            </h3>
            <p className="text-gray-600 text-center">{selectedMember.role}</p>
            <p className="text-gray-700 mt-4">{selectedMember.contribution}</p>
            {selectedMember.linkedin && (
              <div className="text-center mt-4">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
