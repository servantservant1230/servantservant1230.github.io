import"./styles-BufaHF3D.js";import{i as p}from"./ads-D-IuExRI.js";const s=document.querySelector("#result"),n=sessionStorage.getItem("nsolo_result"),i=new URLSearchParams(location.search).get("lang")||"ko",r={ko:{title:"나는 솔로에 나간다면 나의 이름은?",subtitle:"Top 3 이름 결과를 확인해보세요.",retry:"다시 분석",empty:"결과가 없습니다. 다시 분석해주세요."},en:{title:"If you joined I AM SOLO, what would your name be?",subtitle:"Check your Top 3 name results.",retry:"Try Again",empty:"No result found. Please run analysis again."},ja:{title:"나는 솔로 に出たら、私の名前は？",subtitle:"Top 3 名前の結果を確認してください。",retry:"もう一度分析",empty:"結果がありません。もう一度分析してください。"}},e=r[i]||r.ko,l=document.querySelector(".hero h1"),a=document.querySelector(".hero p"),o=document.querySelector(".row .btn.ghost");l&&(l.textContent=e.title);a&&(a.textContent=e.subtitle);o&&(o.textContent=e.retry,o.href=`/scan.html?lang=${encodeURIComponent(i)}`);if(!n)s.innerHTML=`<p>${e.empty}</p>`;else{const c=JSON.parse(n);s.innerHTML=c.map((t,u)=>`
    <div class="card">
      <small class="muted">${u+1}순위</small>
      <div class="result-top">${t.label} <span class="muted" style="font-size:22px">${t.p}%</span></div>
      <p>${t.desc}</p>
      <div class="bar"><i style="width:${t.p}%"></i></div>
    </div>`).join("")}p();
