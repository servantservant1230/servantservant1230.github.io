import"./styles-CQEqC4-o.js";const d=document.querySelector("#result"),v=document.querySelector("#save-image"),i=document.querySelector("#toast"),m=sessionStorage.getItem("teto_result"),c=sessionStorage.getItem("teto_face");function h(e){i&&(i.innerHTML=`<strong>${e}</strong>`,i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),1500))}if(!m)d.innerHTML="<div class='card'><p>결과가 없습니다. 다시 분석해 주세요.</p><a class='btn' href='/teto-scan.html'>나도 해보기</a></div>";else{const{teto:e,egen:n}=JSON.parse(m),g=e>=60?"테토 무드 우세":n>=60?"에겐 무드 우세":"밸런스 무드",f=e>=60?"/mood/teto.html":n>=60?"/mood/egen.html":"/mood/balance.html";d.innerHTML=`
  <div class='card'>
    <small class='muted'>한눈에 보기</small>
    <div class='result-top'>${g}</div>
    <p class='muted'>의학/호르몬 예측이 아닌 오락용 인상 분류입니다.</p>
    <a class='btn ghost' href='${f}'>무드 설명 보기</a>
  </div>
  ${c?`<div class='card'><small class='muted'>탐지된 얼굴</small><img src='${c}' alt='face' style='display:block;max-width:240px;width:100%;border-radius:14px;margin-top:8px;border:1px solid #dbe5f3'/></div>`:""}
  <div class='card'>
    <div class='row' style='justify-content:space-between'><strong>테토</strong><strong>${e}%</strong></div>
    <div class='bar'><i style='width:${e}%'></i></div>
    <div class='row' style='justify-content:space-between;margin-top:10px'><strong>에겐</strong><strong>${n}%</strong></div>
    <div class='bar'><i style='width:${n}%;background:#93c5fd'></i></div>
  </div>`,v.onclick=async()=>{const s=document.createElement("canvas");s.width=1080,s.height=1280;const t=s.getContext("2d");if(t.fillStyle="#1e1b4b",t.fillRect(0,0,s.width,s.height),t.fillStyle="#fff",t.font="800 64px system-ui",t.fillText("테토/에겐 관상 무드 결과",72,120),t.font="700 54px system-ui",t.fillText(`테토 ${e}% · 에겐 ${n}%`,72,220),c){const l=await new Promise((u,p)=>{const a=new Image;a.onload=()=>u(a),a.onerror=p,a.src=c});t.drawImage(l,72,280,420,420)}t.fillStyle="#c7d2fe",t.font="600 30px system-ui",t.fillText("오락용 인상 분류 · 의학/호르몬 예측 아님",72,1200);const r=await new Promise(l=>s.toBlob(l,"image/png"));if(!r)return;const o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="teto-egen-result.png",document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(o.href),h("결과 이미지 저장 완료")}}
