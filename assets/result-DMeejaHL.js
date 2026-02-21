import"./styles-BufaHF3D.js";import{i as a}from"./ads-D-IuExRI.js";const e=document.querySelector("#result"),t=sessionStorage.getItem("nsolo_result");if(!t)e.innerHTML="<p>결과가 없습니다. 다시 분석해주세요.</p>";else{const i=JSON.parse(t);e.innerHTML=i.map((s,l)=>`
    <div class="card">
      <small class="muted">${l+1}순위</small>
      <div class="result-top">${s.label} <span class="muted" style="font-size:22px">${s.p}%</span></div>
      <p>${s.desc}</p>
      <div class="bar"><i style="width:${s.p}%"></i></div>
    </div>`).join("")}a();
