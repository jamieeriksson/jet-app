import React from "react";
import "../tailwind.output.css";

function Philosophy() {
  return (
    <div className="p-6 max-w-6xl container font-sans text-gray-light">
      <h3 className="uppercase text-3xl font-title mt-3 lg:mt-2 xl:mt-0">
        Our Coaching Philosophy
      </h3>
      <div className="w-48 h-6 bg-teal-bright mb-12"></div>
      <div className="font-light">
        <p>
          Everyone knows there is agreed-upon technique for efficiently shooting
          a basketball, hitting a baseball, swinging a golf club, sprinting, or
          performing in almost any other sport. We believe the same holds true
          for ultimate frisbee throwing mechanics, and we are here to coach it.
          <br />
          <br />
          We believe that proper throwing development and coaching needs to be
          an individualized and one-on-one experience. General programs and
          drills have been tried and proven ineffective. For a player to truly
          master their mechanics they need to work intimately with a coach who
          can analyze their form, give them cues based on their own personal
          mechanics, and craft drills specific to their form. Players are
          different - they develop unique habits and have different levels of
          mobility and structural builds. If you are wanting to take your game
          and your throwing to the next level, cookie-cutter plans just will not
          do it. You need a coach who can tailor a program to your specific
          needs.
          <br />
          <br />
          Below is an example of how my forehand mechanics have changed after
          intensively studying and training throwing technique. This improvement
          in technique has put 15-20 extra yards on my forehand huck, has given
          me better forehand break throws, has improved my ability to throw in
          the wind and in rain, and has increased the reliability and
          consistency of my throws. It also took me five years to achieve on my
          own versus the 3-4 months that it should have taken had I had a proper
          throwing coach to work with.
        </p>
        <iframe
          className="my-6 mx-auto"
          width="840"
          height="472.5"
          title="jamie-forehand-form"
          src="https://www.youtube.com/embed/wWF62939IwI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          We can help you improve your backhand, forehand, break throws, hucks,
          and pivots. We would love to help you understand and improve your
          throwing technique in order to achieve your ultimate frisbee goals.
        </p>
      </div>
    </div>
  );
}

export default Philosophy;
