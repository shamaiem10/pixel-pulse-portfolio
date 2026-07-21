const signals = ["AI AUTOMATION", "EXPLAINABLE AI", "FULL-STACK SYSTEMS", "LLM WORKFLOWS", "RESEARCH", "CLOUD DEPLOYMENT"];

const SignalStrip = () => (
  <div className="signal-strip border-y border-border bg-card/70 overflow-hidden" aria-label="Areas of expertise">
    <div className="signal-track py-3 flex w-max">
      {[...signals, ...signals].map((signal, index) => (
        <div key={`${signal}-${index}`} className="flex items-center gap-5 px-5 font-pixel text-[8px] tracking-widest text-muted-foreground">
          <span className={index % 2 === 0 ? "text-primary" : "text-secondary"}>{signal}</span>
          <span className="signal-pixel" aria-hidden="true" />
        </div>
      ))}
    </div>
  </div>
);

export default SignalStrip;
