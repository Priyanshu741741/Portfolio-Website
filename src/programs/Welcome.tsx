import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";

const INTRO = `Hi, I'm Priyanshu Kumar — a B.Tech CSE student at Punjab Engineering College (PEC),
  Chandigarh (CGPA: 9.47, Class of 2027). I recently completed a Software Developer Internship at
  Cvent in Gurugram, where I shipped 73+ production features using Python, Apex, Salesforce, and
  SQL, and built an ML-based ticket triage system achieving ~88% accuracy. I'm passionate about
  building impactful AI/ML solutions and full-stack applications that actually matter.`;

const WHYSITE = `I've always loved building things that are different and memorable. A Windows XP-style
portfolio felt like the perfect blend of nostalgia and creativity — a way to stand out from the
sea of static portfolio pages. The retro desktop interface pays tribute to the era of computing that
sparked curiosity in so many developers, including me. I figured: why not present myself in an
environment that itself is a project?`;

const INTERESTS = `Beyond coding, I'm a National Open Athletics Silver Medalist — I represented
Chandigarh at the 2023 National Open Meet. I'm also Joint Head of the Women Empowerment Cell at PEC,
where I led the Period Pain Simulator awareness campaign and secured Rs. 20,000 in sponsorships.
I've competed at hackathons nationwide — Top 10 at NatWest AI Hackathon, Top 10 at GDG Solution
Challenge, and Top 20 at ZS Associates Hackathon.`;

const INTERESTS2 = `I hold a 100% Merit Fee Waiver scholarship for ranking among the top students in
my department, and I'm always exploring new technologies — whether that's Salesforce Apex, Databricks,
Snowflake, or the latest LLM APIs. I believe the most interesting problems are the ones nobody has
solved yet, and building tools for those problems is what keeps me going.`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);

  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Priyanshu&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/Priyanshu741741",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My LinkedIn"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/priyanshu-kumar-ba82572a5/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Projects I've built"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography"}
                tooltip="Coming soon!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="Priyanshu Kumar"
                src={userprofile.src}
                width={220}
                height={220}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                Beyond the code
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br />
              <p className={styles.subtitle}>{INTERESTS2}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
