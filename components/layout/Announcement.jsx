import frontendReadAnnouncements from "@/services/frontend/announcement/frontendReadAnnouncements";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import Announcement from "../announcement/Announcement";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    let subscribe = true;

    frontendReadAnnouncements({
      limit: undefined,
      page: undefined,
    }).then((res) => {
      if (!subscribe) return;

      setAnnouncements(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <div className=''>
      <div className='relative w-full z-0'>
        {/* <!-- Carousel wrapper --> */}
        <div
          className='flex flex-wrap  border border-slate-300 m-2 p-3 relative h-56 overflow-hidden rounded-lg bg-gradient-to-r from-CITLOrange'
          // style={{ backgroundImage: "url(/IMAGES/DSC_6510.jpg)" }}
        >
          <Carousel>
            {announcements.map((announcement) => (
              <Announcement
                key={announcement.id}
                description={announcement.description}
                title={announcement.title}
                link={announcement.link}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
