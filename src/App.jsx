import { useState, useRef } from "react";

const UNIVERSITIES = [

  "October University for Modern Sciences and Arts (MSA)",
  "(AAST)Arab Academy for Science, Technology and Maritime Transport",
  "Misr University for Science and Technology (MUST)",
  "Misr International University (MIU)",
  "German University in Cairo (GUC)",
  "British University in Egypt (BUE)",
  "Modern University for Technology and Information (MTI)",
  "Sinai University (SU)",
  "Pharos University in Alexandria (PUA)",
  "Nahda University in Beni Suef (NUB)",
  "Future University in Egypt (FUE)",
  "Egyptian Russian University (ERU)",
  "6th of October University (O6U)",
  "Delta University for Science and Technology",
  "Heliopolis University for Sustainable Development",
  "New Giza University (NGU)",
  "Deraya University",
  "Badr University in Cairo (BUC)",
  "Horus University",
  "Egyptian Chinese University (ECU)",
  "Merritt University (MUE)",
  "Sphinx University",
  "Al-Salam University",
  "Lotus University",
  "Badr University in Assiut",
  "New Salhia University (SGU)",
  "El Hayah University",
  "May University in Cairo",
  "Al-Rayada University for Science and Technology",
  "Innovation University",
  "City University of Cairo (CUC)",
  "Rashid University",
  "Badya University",
  "Memphis University",
  "Wadi El-Nil University",
  "Elsewedy University of Technology",
  "American University in Cairo (AUC)",
  "French University in Egypt (UFE)",
  "German International University (GIU)",
  "European Universities in Egypt (EUE)",
  "The Knowledge Hub Universities (TKH)",
  "University of Hertfordshire - Egypt",
  "Toronto Metropolitan University - Egypt",
  "University of Prince Edward Island (UPEI) - Egypt",
  "NOVA University Cairo",
  "Senghor University",
  "Cairo University",
  "Alexandria University",
  "Ain Shams University",
  "Assiut University",
  "Tanta University",
  "Mansoura University",
  "Zagazig University",
  "Helwan University",
  "Minia University",
  "Menoufia University",
  "Suez Canal University",
  "South Valley University",
  "Beni Suef University",
  "Fayoum University",
  "Benha University",
  "Kafr El Sheikh University",
  "Sohag University",
  "Port Said University",
  "Damanhour University",
  "Aswan University",
  "Damietta University",
  "Suez University",
  "University of Sadat City",
  "Arish University",
  "New Valley University",
  "Matrouh University",
  "Luxor University",
  "Al-Azhar University",
  "Cairo Technological University",
  "Delta Technological University",
  "Beni Suef Technological University",
  "Nile University (NU)",
  "Zewail City of Science and Technology",
  "King Salman International University",
  "Al Galala University",
  "Alamein International University",
  "New Mansoura University",
  "Egypt-Japan University of Science and Technology (E-JUST)",
  "Egypt University of Informatics (EUI)",
  "Egyptian E-Learning University (EELU)",
  "Cairo National University",
  "Alexandria National University",
  "Ain Shams National University",
  "Mansoura National University",
  "Zagazig National University",
  "Assiut National University",
  "Beni Suef National University",
  "Suez Canal National University",
  "Helwan National University",
  "Minia National University",
  "Menoufia National University",
  "Benha National University",
  "South Valley National University",
  "Kafr El Sheikh National University",
  "East Port Said National University", "Other"
];

const FACULTIES = [


  "Engineering",
  "Computer Scince",
  "Urban and Regional Planning",
  "Space Science and Astronomy",
  "Navigation and Space Technology",
  "Medicine",
  "Oral and Dental Medicine",
  "Pharmacy",
  "Physical Therapy",
  "Nursing",
  "Veterinary Medicine",
  "Applied Health Sciences Technology",
  "Biotechnology",
  "Business Informatics",
  "Management Technology",
  "Social Work",
  "Arts",
  "Energy and Environmental Engineering",
  "Science",
  "Agriculture",
  "Fish and Fisheries Science",
  "Desert and Environmental Research",
  "Commerce and Business Administration",
  "Economics and Political Science",
  "Law",
  "Al-Alsun (Languages)",
  "Dar El-Ulum (Arabic and Islamic Studies)",
  "Mass Communication",
  "Archaeology",
  "Tourism and Hotels",
  "Fine Arts",
  "Applied Arts",
  "Digital Arts and Design",
  "Education",
  "Specific Education",
  "Physical Education",
  "Education for Early Childhood",
  "Disability and Rehabilitation Sciences",
  "Library and Information Management",
  "Theology and Islamic Studies (Al-Azhar)",
  "Sharia and Law (Al-Azhar)",
  "Other"
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Postgrad"];

function ScaleButton({ value, selected, onClick, large }) {
  const size = large ? 50 : 44;
  return (
    <button
      onClick={() => onClick(value)}
      style={{
        width: size, height: size, borderRadius: "50%", flexShrink: 0,
        border: selected ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.14)",
        background: selected ? "#E8FF4A" : "rgba(255,255,255,0.04)",
        color: selected ? "#0A0A0A" : "rgba(255,255,255,0.65)",
        fontFamily: "'DM Mono', monospace",
        fontSize: large ? 15 : 13,
        fontWeight: selected ? 700 : 400,
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
        transform: selected ? "scale(1.15)" : "scale(1)",
      }}
    >{value}</button>
  );
}

function ScaleRow({ value, onChange, min, max, scale = 5, large }) {
  return (
    <div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", margin: "4px 0 12px" }}>
        {Array.from({ length: scale }, (_, i) => i + 1).map(n => (
          <ScaleButton key={n} value={n} selected={value === n} onClick={onChange} large={large} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>{min}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>{max}</span>
      </div>
    </div>
  );
}

function ChoiceButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", padding: "15px 18px", borderRadius: 12, cursor: "pointer",
        border: selected ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.1)",
        background: selected ? "rgba(232,255,74,0.07)" : "rgba(255,255,255,0.03)",
        color: selected ? "#E8FF4A" : "rgba(255,255,255,0.72)",
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: selected ? 600 : 400,
        textAlign: "left", display: "flex", alignItems: "center", gap: 12,
        transition: "all 0.16s ease",
      }}
    >
      <span style={{
        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
        border: selected ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.2)",
        background: selected ? "#E8FF4A" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.16s ease",
      }}>
        {selected && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0A0A0A" }} />}
      </span>
      {label}
    </button>
  );
}

function SelectField({ value, onChange, options, placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", padding: "15px 44px 15px 18px", borderRadius: 12,
          border: value ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.04)",
          color: value ? "#fff" : "rgba(255,255,255,0.3)",
          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
          outline: "none", appearance: "none", cursor: "pointer",
          transition: "border-color 0.2s ease",
        }}
      >
        <option value="" disabled style={{ background: "#111", color: "#666" }}>{placeholder}</option>
        {options.map(o => <option key={o} value={o} style={{ background: "#111", color: "#fff" }}>{o}</option>)}
      </select>
      <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.35)", pointerEvents: "none", fontSize: 11 }}>▼</span>
    </div>
  );
}

function YesNoRow({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {["Yes", "No"].map(o => (
        <button key={o} onClick={() => onChange(o)} style={{
          flex: 1, padding: "18px",
          borderRadius: 12, cursor: "pointer",
          border: value === o ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.1)",
          background: value === o ? "rgba(232,255,74,0.08)" : "rgba(255,255,255,0.03)",
          color: value === o ? "#E8FF4A" : "rgba(255,255,255,0.65)",
          fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
          transition: "all 0.16s ease",
        }}>{o}</button>
      ))}
    </div>
  );
}

function QLabel({ num }) {
  return (
    <span style={{
      display: "inline-block", marginBottom: 14,
      fontFamily: "'DM Mono', monospace", fontSize: 10,
      color: "#E8FF4A", letterSpacing: "0.12em",
      background: "rgba(232,255,74,0.1)", padding: "4px 10px", borderRadius: 100,
    }}>Q{num}</span>
  );
}

const Q = ({ style, children }) => (
  <h2 style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(19px, 3.5vw, 26px)", fontWeight: 700,
    color: "#fff", lineHeight: 1.3, marginBottom: 24,
    letterSpacing: "-0.01em",
    ...style
  }}>{children}</h2>
);

const STEPS = [
  "intro", "q1", "q2", "q3",
  "q4", "q5",
  "q6", "q7", "q8",
  "q9", "q9_branch",
  "q10",
  "q11", "q12"
];

const SECTION_LABELS = {
  q1: "Context", q2: "Context", q3: "Context",
  q4: "Your Direction", q5: "Your Direction",
  q6: "Degree vs Reality", q7: "Degree vs Reality", q8: "Degree vs Reality",
  q9: "Exposure & Mentorship", q9_branch: "Exposure & Mentorship", q10: "Exposure & Mentorship",
  q11: "The Signal", q12: "The Signal",
};

export default function NexusSurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visible, setVisible] = useState(true);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const textRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key, val) => setAnswers(p => ({ ...p, [key]: val }));

  const totalQ = STEPS.length - 1; // excluding intro
  const currentId = STEPS[step];
  const qIndex = STEPS.indexOf(currentId) - 1; // -1 for intro
  const progress = step === 0 ? 0 : Math.round((qIndex / totalQ) * 100);

  const transition = (newStep, d = 1) => {
    setDir(d);
    setVisible(false);
    setTimeout(() => { setStep(newStep); setVisible(true); }, 260);
  };

  const next = async () => {
    if (step >= STEPS.length - 1) { 
      setIsSubmitting(true);
      
      try {
        
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzng0iW4POE2UqXkrkYgIES56LDsfoyDj1vMC6mVxNCfoMcQn2qNxhBUZwO9mI2KJdE6Q/exec"; 
        
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        });
  
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting survey:", error);
        alert("error while submitting please try again.");
      } finally {
        setIsSubmitting(false);
      }
      return; 
    }
    
    transition(step + 1, 1);
  };

  const back = () => {
    if (step > 0) transition(step - 1, -1);
  };

  const canProceed = () => {
    const id = STEPS[step];
    if (id === "intro") return true;
    if (id === "q9_branch") return answers.q9a !== undefined || answers.q9b !== undefined;
    return answers[id] !== undefined && answers[id] !== "";
  };

  if (submitted) return <ThankYou />;

  return (
    <Shell>
      {step > 0 && (
        <div style={{ width: "100%", maxWidth: 560, margin: "0 auto 28px", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {SECTION_LABELS[currentId]}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.28)" }}>{progress}%</span>
          </div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#E8FF4A", borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>
      )}

      <div style={{
        maxWidth: 560, width: "100%", margin: "0 auto", padding: "0 20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${dir > 0 ? "18px" : "-18px"})`,
        transition: "opacity 0.26s ease, transform 0.26s ease",
      }}>
        {currentId === "intro" && (
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
              background: "rgba(232,255,74,0.08)", border: "1px solid rgba(232,255,74,0.25)",
              borderRadius: 100, padding: "6px 16px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8FF4A", display: "inline-block" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#E8FF4A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Student Diagnostic
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 700,
              color: "#fff", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.02em"
            }}>
              We're building a bridge<br />
              <span style={{ color: "#E8FF4A" }}>to your first paycheck.</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.75,
              maxWidth: 400, margin: "0 auto 36px"
            }}>
              No names. No grades. Just 3 minutes of your honest experience to help fix the gap between the classroom and the real world.
            </p>
            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 36 }}>
              {["3 minutes", "Anonymous", "12 Questions"].map(t => (
                <div key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#E8FF4A" }}>✓</span> {t}
                </div>
              ))}
            </div>
            <button
              onClick={next}
              style={{
                background: "#E8FF4A", color: "#0A0A0A",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                padding: "15px 44px", borderRadius: 100, border: "none", cursor: "pointer",
                boxShadow: "0 0 40px rgba(232,255,74,0.22)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(232,255,74,0.38)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(232,255,74,0.22)"; }}
            >Start Survey →</button>
          </div>
        )}

        {currentId === "q1" && (
          <div><QLabel num={1} />
            <Q>Which university do you attend?</Q>
            <SelectField value={answers.q1 || ""} onChange={v => set("q1", v)} options={UNIVERSITIES} placeholder="Select your university" />
          </div>
        )}

        {currentId === "q2" && (
          <div><QLabel num={2} />
            <Q>Which faculty or college are you in?</Q>
            <SelectField value={answers.q2 || ""} onChange={v => set("q2", v)} options={FACULTIES} placeholder="Select your faculty" />
          </div>
        )}

        {currentId === "q3" && (
          <div><QLabel num={3} />
            <Q>What year are you in?</Q>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {YEARS.map(y => <ChoiceButton key={y} label={y} selected={answers.q3 === y} onClick={() => set("q3", y)} />)}
            </div>
          </div>
        )}

        {currentId === "q4" && (
          <div><QLabel num={4} />
            <Q>How clear is your picture of what your job will actually look like day-to-day after graduation?</Q>
            <ScaleRow value={answers.q4} onChange={v => set("q4", v)} min="Total mystery" max="Crystal clear" />
          </div>
        )}

        {currentId === "q5" && (
          <div><QLabel num={5} />
            <Q>How much of your chosen field was genuinely <em>your</em> decision — vs. family pressure, peers, or "what made sense"?</Q>
            <ScaleRow value={answers.q5} onChange={v => set("q5", v)} min="Outside pressure" max="My own choice" />
          </div>
        )}

        {currentId === "q6" && (
          <div><QLabel num={6} />
            <Q>How often do your instructors connect what you're learning to what's actually happening in your industry right now?</Q>
            <ScaleRow value={answers.q6} onChange={v => set("q6", v)} min="Never" max="Every week" />
          </div>
        )}

        {currentId === "q7" && (
          <div><QLabel num={7} />
            <Q>If a firm handed you a real project in your field today, how much would your university training actually help?</Q>
            <ScaleRow value={answers.q7} onChange={v => set("q7", v)} min="Barely at all" max="Covers everything" />
          </div>
        )}

        {currentId === "q8" && (
          <div><QLabel num={8} />
            <Q>How much time do you spend self-teaching skills your faculty doesn't cover?</Q>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {["None", "A few hours a month", "Every week", "I'm teaching myself almost everything"].map(o => (
                <ChoiceButton key={o} label={o} selected={answers.q8 === o} onClick={() => set("q8", o)} />
              ))}
            </div>
          </div>
        )}

        {currentId === "q9" && (
          <div><QLabel num={9} />
            <Q>Have you done a professional internship, placement, or any real work experience in your field?</Q>
            <YesNoRow value={answers.q9} onChange={v => set("q9", v)} />
          </div>
        )}

        {currentId === "q9_branch" && answers.q9 === "Yes" && (
          <div><QLabel num="9b" />
            <Q>Did it feel like a real professional preview — or mostly routine tasks that didn't teach you much?</Q>
            <ScaleRow value={answers.q9a} onChange={v => set("q9a", v)} min="Mostly busy work" max="Genuine career preview" />
          </div>
        )}

        {currentId === "q9_branch" && answers.q9 === "No" && (
          <div><QLabel num="9b" />
            <Q>What's the biggest reason you haven't done an internship yet?</Q>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                "I can't find any listings",
                "I don't feel ready yet",
                "Companies want experience I don't have",
                "My schedule is too full"
              ].map(o => (
                <ChoiceButton key={o} label={o} selected={answers.q9b === o} onClick={() => set("q9b", o)} />
              ))}
            </div>
          </div>
        )}

        {currentId === "q10" && (
          <div><QLabel num={10} />
            <Q>Do you have even one person currently working in your industry who you can ask for honest career advice?</Q>
            <YesNoRow value={answers.q10} onChange={v => set("q10", v)} />
          </div>
        )}

        {currentId === "q11" && (
          <div><QLabel num={11} />
            <Q>Honestly — how ready do you feel to enter the workforce after graduation?</Q>
            <ScaleRow value={answers.q11} onChange={v => set("q11", v)} min="Terrified & unprepared" max="Confident & market-ready" scale={10} large />
          </div>
        )}

        {currentId === "q12" && (
          <div><QLabel num={12} />
            <Q>What's the ONE thing you wish your degree actually taught you about the real world?</Q>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.32)", fontSize: 12, marginBottom: 14 }}>
              This one matters most — take your time.
            </p>
            <textarea
              ref={textRef}
              value={answers.q12 || ""}
              onChange={e => set("q12", e.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              style={{
                width: "100%", padding: "15px 18px", borderRadius: 12,
                border: answers.q12 ? "2px solid #E8FF4A" : "2px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.65,
                outline: "none", resize: "none", boxSizing: "border-box",
                transition: "border-color 0.2s ease",
              }}
            />
          </div>
        )}

        {currentId !== "intro" && (
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <button
              onClick={back}
              style={{
                padding: "13px 18px", borderRadius: 10, cursor: "pointer",
                border: "2px solid rgba(255,255,255,0.1)", background: "transparent",
                color: "rgba(255,255,255,0.38)", fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                transition: "all 0.16s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.38)"; }}
            >← Back</button>
            <button
              onClick={canProceed() && !isSubmitting ? next : undefined}
              disabled={!canProceed() || isSubmitting}
              style={{
                flex: 1, padding: "14px 22px", borderRadius: 10, border: "none",
                background: canProceed() && !isSubmitting ? "#E8FF4A" : "rgba(255,255,255,0.06)",
                color: canProceed() && !isSubmitting ? "#0A0A0A" : "rgba(255,255,255,0.18)",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                cursor: canProceed() && !isSubmitting ? "pointer" : "not-allowed",
                transition: "all 0.18s ease",
                boxShadow: canProceed() && !isSubmitting ? "0 0 28px rgba(232,255,74,0.18)" : "none",
              }}
            >
              {isSubmitting ? "Submitting..." : step === STEPS.length - 1 ? "Submit Survey ✓" : "Continue →"}
            </button>
          </div>
        )}
      </div>
    </Shell>
  );
}

function ThankYou() {
  return (
    <Shell>
      <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto", padding: "20px 20px" }}>
        <div style={{
          width: 68, height: 68, borderRadius: "50%", margin: "0 auto 28px",
          background: "rgba(232,255,74,0.1)", border: "2px solid #E8FF4A",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26
        }}>✓</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700,
          color: "#fff", marginBottom: 14, lineHeight: 1.2,
        }}>
          You just helped fix<br /><span style={{ color: "#E8FF4A" }}>a broken system.</span>
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.75, marginBottom: 36
        }}>
          Your answers are 100% anonymous and will be used to build better tools for students like you. We'll share the results publicly when the data is in.
        </p>
        <div style={{
          background: "rgba(232,255,74,0.05)", border: "1px solid rgba(232,255,74,0.18)",
          borderRadius: 14, padding: "22px 24px"
        }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#E8FF4A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Bridge Is coming
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0, lineHeight: 1.65 }}>
            The platform built to close the exact gap you just described. Built by students, for students.
          </p>
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#0A0A0A",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "60px 0 40px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,255,74,0.05) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.012) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      <div style={{
        position: "fixed", top: 22, left: "50%", transform: "translateX(-50%)",
        fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 700,
        color: "#E8FF4A", letterSpacing: "0.18em", textTransform: "uppercase", zIndex: 10,
      }}>SOL...</div>
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>{children}</div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0A0A; }
        textarea::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
