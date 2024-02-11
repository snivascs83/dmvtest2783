import React, { useState } from "react";

function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className=" rounded-[8px]  px-[24px] shadow-md">
      <div
        className="flex cursor-pointer items-center justify-between text-[24px] font-normal leading-[60px]"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div>What is Classcourse?</div>

        {accordionOpen ? (
          <span className="flex h-[32px] w-[32px] items-center  justify-center rounded-full border-[3px]">
            -
          </span>
        ) : (
          <span className="flex h-[32px] w-[32px] items-center justify-center  rounded-full border-[3px] bg-[#5635AE] text-white">
            +
          </span>
        )}
      </div>

      <div>
        <div
          className={`grid overflow-hidden transition-all duration-200  ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            Classcourse is an online learning community where anyone can
            discover, take, or even teach a class. Anyone can join Classcourse
            to start watching online classes, create projects, and even become a
            teacher. We started Classcourse to close the professional skills gap
            and provide universal access to high-quality learning. By teaching
            the skills needed in tomorrows world, Classcourse empowers people to
            advance their careers, improve their lives, and pursue the work they
            love. Students are able to engage with teachers and other students
            through project-based classes, where they will walk through the
            process of creating something. We believe that learning by doing is
            the best way to gain new skills and expand your creativity. By the
            end of a project-based class, not only have you learned a new skill,
            but you have something awesome to show for it.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
