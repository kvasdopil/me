import BackButton from "../components/BackButton";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";

const Image = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="flex justify-center align-center mb-8 ">
      <img src={src} alt={alt} width={width} height={height} className="rounded-lg" />
    </div>
  );
};

export default function InstabeeFleetDashboard() {
  return (
    <div>
      <BackButton />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-12">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <PageContainer>
              <PageHeader
                title="Robot Arm"
                company="hobby project"
                year="2023-ongoing"
                description="Because who wouldn't want a to build one?"
              />

              <PageContent>
                <PageSection>
                  So, I was between jobs and for the first time I had couple of months to spare. And
                  a brand new 3D printer was asking to be used for anything beyond kids toys. So
                  naturally I thought: Come on, Tony Stark has a robot arm, I can too!
                </PageSection>

                <PageSection>
                  Then it was time for a set of completely made-up constraints and requirements.
                  Okay, i want to start with something super simple, like 2 or maybe 3 axes. All
                  joints should be interchangeable and cheap. Most of the parts should be 3D printed
                  because thats what this smart people from the internet do.
                </PageSection>

                <PageSection>
                  First iterations used an old 3d printer as a foundation - it had 3 servos, a
                  controller, a power source, and a nice base frame.
                </PageSection>

                <PageSection>
                  <Image
                    src="/robot-arm/servo-herring.png"
                    alt="Robot Arm Servo"
                    width={600}
                    height={600}
                  />
                  Then I started to design the servos. Turned out Autodesk gives a free license for
                  Fusion 360 to hobbyists, so I used that. Integrates nicely with Cura and 3d
                  printer. Tried harmonic drive gears first, then ended up with a simple-ish
                  planetary reducer with herringbone gear.
                </PageSection>

                <PageSection>
                  For servo controllers I found Servo42c - a cheap and simple controller, working
                  with any NUMA17 stepper, controllable with UART. One big issue with that was that
                  speed control was a bit unreliable, and tweaking PID parameters was impossible on
                  a version i bought. The latest version uses{" "}
                  <a
                    className="text-blue-500 decoration-underline"
                    href="https://www.aliexpress.com/i/1005005593922187.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Servo42d
                  </a>{" "}
                  - a newer version with rs485 (modbus RTU) interface. One issue with that last one
                  is it is impossible to change the target angle of the servo when it is moving -
                  only speed can be changed. Meaning I cant control the arm in realtime without
                  stopping the movement. Perhaps i can work around that.
                </PageSection>

                <PageSection>
                  I worked a bit on ROS2 integration, and had some good progress, but ended up
                  having too many issues integrating Moveit2 (IK solver and trajectory planner).
                  Perhaps I'll come back to it later.
                </PageSection>

                <PageSection>
                  <Image src="/robot-arm/ui.png" alt="Robot Arm UI" width={600} height={600} />
                  So for now, just to have some quick progress, and be able to leverage vibecoding
                  superpowers, I ended up with a tiny UI to visualise the arm and set targets and
                  trajectories. A python backend performs IK and trajectory planning, then small TS
                  script talks to servos. Right now the arm is using 4 servos, let's see how far i
                  can get from here.
                </PageSection>

                <PageSection>
                  Current goal is to make it move nice and smooth along straight lines, point to
                  point. Then maybe a spline path. The biggest issue so far is backlash that causes
                  the tip to oscillate, and the whole servo design is not too rigid - every joint is
                  connected to a single bearing, so lateral movement is too big.
                </PageSection>

                <PageSection>
                  The project is done in <Tag>TypeScript</Tag> for <Tag>next.js</Tag>, using{" "}
                  <Tag>three.js</Tag> for 3d visualisation. Some components are done in{" "}
                  <Tag>python</Tag> for <Tag>ROS2</Tag>. 3D modelling and CAD is done in{" "}
                  <Tag>Fusion 360</Tag>. Development is done in <Tag>cursor</Tag>.
                </PageSection>

                <PageSection>
                  ROS2 controllers for Servo42C and Servo42D can be found{" "}
                  <a
                    className="text-blue-500 decoration-underline"
                    href="https://github.com/kvasdopil/servo42c_controller"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  . The UI is available{" "}
                  <a
                    className="text-blue-500 decoration-underline"
                    href="https://github.com/kvasdopil/robot-arm-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </PageSection>
              </PageContent>
            </PageContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
