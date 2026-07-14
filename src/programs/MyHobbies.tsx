import styles from "./MyHobbies.module.css";

const MyHobbies = () => {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>My Hobbies &amp; Interests</h3>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.card_header}>Athletics — National Silver Medalist</div>
          <p className={styles.card_body}>
            Represented Chandigarh at the 2023 National Open Athletics Meet and won a Silver Medal.
            Running keeps me disciplined, grounded, and ready to push through the hard stuff — on the
            track and off it.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>Hackathons &amp; Competitive Problem-Solving</div>
          <p className={styles.card_body}>
            Top 10 at the NatWest AI Hackathon (nationwide), Top 10 at GDG Solution Challenge, and
            Top 20 at ZS Associates Hackathon. The pressure of shipping something real in 24–48 hours
            is my favourite kind of challenge.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>Social Impact &amp; Leadership</div>
          <p className={styles.card_body}>
            Joint Head of the Women Empowerment Cell at PEC. Led the Period Pain Simulator awareness
            campaign and secured Rs. 20,000 in sponsorships. I believe tech should serve people
            first — leadership is how you make that happen.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>Building AI/ML Things</div>
          <p className={styles.card_body}>
            When I&apos;m not studying or interning, I&apos;m training models. From TF-IDF classifiers and
            MobileNetV2 crop detectors to KNN recommendation engines — if there&apos;s a problem worth
            solving, I&apos;ll try to build something for it.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>Academic Excellence</div>
          <p className={styles.card_body}>
            Awarded a 100% Merit Fee Waiver scholarship for ranking among the top students in the
            CSE department at PEC. CGPA: 9.47. Proving that curiosity and hard work aren&apos;t
            mutually exclusive.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>Exploring New Tech</div>
          <p className={styles.card_body}>
            Always tinkering with something new — Salesforce Apex, Databricks pipelines, Snowflake
            queries, or the latest LLM APIs. The best way to learn is to break things in a sandbox
            until they work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyHobbies;
