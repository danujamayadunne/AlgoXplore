'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {

  const tabs = ["About", "Menu 2", "Menu 3", "Menu 4", "Register"];
  const [activeTab, setActiveTab] = useState("About");

  const handleKeyDown = (event: KeyboardEvent) => {
    const currentIndex = tabs.indexOf(activeTab);
    if (event.key === "ArrowDown") {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    } else if (event.key === "ArrowUp") {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab]);

  return (
    <main className="main flex items-center justify-center min-h-screen">

      <div className="overflow-x-hidden overflow-y-scroll terminal">

        <div className="fixed z-10 header">
          <div className="flex justify-between items-center">
            <p className="relative font-bold text-xl pointer-events-none glitch" data-text="AlgoXplore 1.0">AlgoXplore 1.0</p>
            <div className="flex gap-3 text-sm">
              <Link href="/">
                <p className="hover:after:content-['↗'] hover:after:ml-1 pointer-events-auto">LinkedIn</p>
              </Link>
              <Link href="/">
                <p className="hover:after:content-['↗'] hover:after:ml-1">Instagram</p>
              </Link>
              <Link href="/">
                <p className="hover:after:content-['↗'] hover:after:ml-1">Facebook</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between terminal_data">

          <div className="fixed w-2/4">
            <div className="flex flex-col gap-2 justify-center">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer menu_item ${activeTab === tab ? "bg-[#38ac38] text-black" : ""}`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="terminal_right ml-auto overflow-y-auto">
            {activeTab === "About" &&
              <div className="pr-20">
                <p>
                  AlgoXplore 1.0 is event organized by the []. The event is aimed at providing a platform for students to explore the world of algorithms and data structures. The event will consist of a series of lectures and hands-on sessions on various topics in algorithms and data structures. The event will also include a coding competition where participants can showcase their skills in competitive programming
                  <span className="blinking_underscore"> _</span>
                </p>
                <img className="mt-5 about_image" src="/algoexplore.jpg" alt="AlgoXplore" width={500} height={200} />
                <p className="pt-5">
                  The event is open to all students who are interested in algorithms and data structures. Participants can register as a team of up to four members. The event will be held on 10th October 2021 at the []. Participants are required to bring their own laptops for the coding competition. The event is free of charge and lunch will be provided. //AI Generated Text.
                </p>
              </div>
            }

            {activeTab === "Menu 2" && <div>Menu Content 2</div>}
            {activeTab === "Menu 3" && <div>Menu Content 3</div>}
            {activeTab === "Menu 4" && <div>Menu Content 4</div>}

            {activeTab === "Register" &&
              <div>
                <p>Register for the event</p>
                <form className="pt-9">
                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <label htmlFor="teamname">Team Name</label>
                      <input className="input" type="text" id="teamname" name="teamname" placeholder="Group X" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input className="input" type="email" id="email" name="email" placeholder="example@email.com" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="mobile">Mobile</label>
                      <input className="input" type="text" id="mobile" name="mobile" placeholder="07X-XXXX-XXX" />
                    </div>
                  </div>
                  <div className="flex flex-col pt-9">
                    <label htmlFor="member">Team Members</label>
                    <input className="input2 pt-2" type="text" id="member" name="member1" placeholder="Member 1" />
                    <input className="input2 pt-2" type="text" id="member" name="member2" placeholder="Member 2" />
                    <input className="input2 pt-2" type="text" id="member" name="member3" placeholder="Member 3" />
                    <input className="input2 pt-2" type="text" id="member" name="member4" placeholder="Member 4" />
                  </div>
                  <button className="btn mt-9 border p-2 text-sm border-[#38ac38] hover:bg-[#38ac38] hover:text-black" type="submit"> &gt;&gt; Register</button>
                </form>
              </div>
            }
          </div>

        </div>

      </div>

    </main>
  );
}
