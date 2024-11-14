import { Calendar1Icon } from "lucide-react";
import React ,{ useState} from "react";


const events = [
  { title: "Career Day Webinar Series", date: "June 15, 2024", type: "Webinar", description: "Gain insights into today's top career fields and pathways" },
  { title: "Coding Bootcamp Orientation", date: "July 7, 2024", type: "Workshop", description: "Hands-on intro to coding" },
  { title: "Data Science Networking Event", date: "August 5, 2024", type: "Networking", description: "Connect with fellow data enthusiasts" },
];

const EventsCalendar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="text-center">
      <div className="container mx-auto bg-[#fff9] px-16 py-16 rounded-2xl border border-white">
        <h2 className="text-3xl font-bold text-[#003A2E]">Upcoming Events</h2>
        <div className="grid grid-cols-1 mt-8">
          {events.map((event, index) => (
            <div key={index} className={`${index==1 && '-translate-y-2'} ${index==2 && '-translate-y-4'} bg-[#003A2E] text-[#E9E3D4] p-6 rounded-2xl border border-[#BB914A] ${
              hoveredIndex === index ? "h-36" : "h-32"
            } transition-all duration-500 ease-in-out grid`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='flex justify-between'>
                <h3 className="text-xl font-bold text-[#BB914A]">{event.title}</h3>
                <div className='flex'><p>{event.date}</p>&nbsp;<Calendar1Icon/></div>
              </div>
              <p>{event.type}</p>
              <p>{event.description}</p>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;


