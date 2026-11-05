"use strict";
function initPortfolio(){
  if(window.ScrollCraft&&typeof window.ScrollCraft.mount==="function"){window.ScrollCraft.mount(document.body);}
  const progress=document.getElementById("tm-progress");
  let scheduled=false;
  const updateProgress=()=>{if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?Math.min(100,Math.max(0,scrollY/max*100)):0)+"%";}scheduled=false;};
  addEventListener("scroll",()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress);}}, {passive:true});
  addEventListener("resize",updateProgress,{passive:true});updateProgress();
  const flows={
    coach:{q:"How should I handle a customer who says the price is too high?",label:"AI COACH",a:"Acknowledge the concern. Ask what matters most, then explain relevant value without overpromising.",caption:"Context-aware coaching guidance"},
    practice:{q:"I'm not sure this product is worth the price. Why should I try it?",label:"SIMULATED CUSTOMER",a:"I see the value, but I still have a tight budget. Is there a smaller option?",caption:"Adaptive customer role-play"},
    feedback:{q:"Review my three-turn practice conversation.",label:"PRACTICE FEEDBACK",a:"Strength: you asked about the customer's needs. Improve: confirm the next step and check consent.",caption:"Structured feedback with specific evidence"}
  };
  const chooseFlow=(id)=>{
    const f=flows[id];if(!f)return;
    document.querySelectorAll(".tm-step").forEach(b=>{const v=b.dataset.flow===id;b.classList.toggle("is-active",v);b.setAttribute("aria-selected",String(v));});
    document.getElementById("tm-prompt").textContent=f.q;
    document.getElementById("tm-answer-label").textContent=f.label;
    document.getElementById("tm-answer").textContent=f.a;
    document.getElementById("tm-flow-caption").textContent=f.caption;
  };
  document.querySelectorAll(".tm-step").forEach(btn=>btn.addEventListener("click",()=>chooseFlow(btn.dataset.flow)));
  const problems={
    handoff:{title:"Make the handoff visible.",copy:"Map each owner, input, decision and exception. Automate the repetitive transfer, then leave approval where a person adds judgement.",principle:"Automate the bottleneck. Not the whole organisation."},
    evidence:{title:"Design for evidence, not confidence.",copy:"Define trusted sources, structured output checks and review gates. Let missing information stay missing instead of asking AI to improvise.",principle:"An auditable draft beats an untraceable answer."},
    adoption:{title:"Design the human journey.",copy:"Talk to the team, identify the actual task, test the first useful workflow with users, and measure whether it saves time and earns trust.",principle:"A tool nobody adopts has not solved the problem."}
  };
  document.querySelectorAll(".tm-problem").forEach(btn=>btn.addEventListener("click",()=>{
    const id=btn.dataset.problem;const p=problems[id];if(!p)return;
    document.querySelectorAll(".tm-problem").forEach(el=>el.classList.toggle("is-active",el===btn));
    document.getElementById("tm-inspector-title").textContent=p.title;
    document.getElementById("tm-inspector-copy").textContent=p.copy;
    document.getElementById("tm-inspector-principle").textContent=p.principle;
  }));
  document.querySelectorAll('.tm-step').forEach((tab,i,tabs)=>tab.addEventListener("keydown",(event)=>{
    if(event.key!=="ArrowRight"&&event.key!=="ArrowLeft")return;
    event.preventDefault();const next=(i+(event.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;tabs[next].focus();tabs[next].click();
  }));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initPortfolio);else initPortfolio();
