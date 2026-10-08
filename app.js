'use strict';
const translations = {
  en: {
    skip:'Skip to content',brandSub:'A study in motion',navTry:'Playground',navFilm:'The film',navDesign:'Design',star:'Star on GitHub',
    heroEyebrow:'HANDCRAFTED INTERACTION / 01',heroLine1:'One gesture.',heroLine2:'A whole library.',heroDescription:'From one photograph to hundreds of little memories. A tactile, Apple Photos-inspired grid that follows your fingers.',playDemo:'Play the interaction',openDemo:'Open playground',heroNote:'This is live. Pinch, scroll, or use the controls.',densityCaption:'1 → 3 → 5 → 9 → 13 columns.\nOne continuous gesture.',metaVanilla:'Vanilla JavaScript',metaOpen:'Open source',previewLabel:'LIVE PLAYGROUND',previewLive:'Interactive',previewHint:'Ctrl + scroll to zoom',previewCount:'864 mock photos',
    detail1Title:'Follow the photograph.',detail1Text:'Your focal photo stays in view as the layout changes around it.',detail2Title:'Keep the grid together.',detail2Text:'Tight mosaics crossfade between densities, with no scattered tiles.',detail3Title:'Let motion settle.',detail3Text:'Gentle snapping, inertial scrolling, and a little give at the edges.',
    filmEyebrow:'THE INTERACTION, IN MOTION',filmTitle:'A little film.\nA lot of tiny details.',filmIntro:'A real browser recording of the working demo. Watch the grid expand, tighten, and find its rhythm.',filmBadge:'DEMO / MP4',filmSubTitle:'Big picture.\nSmall moments.',filmText:'Watch one photo stay in focus while the library transforms around it.',chapter1:'Continuous density changes',chapter2:'A photograph as the anchor',chapter3:'Scroll, settle, and repeat',downloadVideo:'Download the video',videoFallback:'Your browser does not support embedded video.',filmFootnote:'Screen recording of mock data. No private photo library is accessed.',
    designEyebrow:'WHERE THE IDEA STARTED',designTitle:'An album, first.\nA camera, second.',designIntro:'The grid grew out of an album-first camera concept: choose where a photo belongs before you take it. These are visual concepts from that earlier study.',designHome:'The album-first home',designCreate:'A place for the next photo',designSettings:'Quiet, useful settings',concept:'CONCEPT',designFootnote:'Visual studies, not implemented app screens. The working prototype above focuses on the photo grid.',
    sourceEyebrow:'SMALL PROJECT. OPEN SOURCE.',sourceTitle:'Take it apart.\nMake it your own.',sourceText:'No framework. No backend. Just a photo grid, a handful of carefully tuned interactions, and the source to explore them.',sourceButton:'Explore on GitHub',sourceNote:'If the interaction sparks an idea, a star helps others discover it.',codeNote:'Conceptual excerpt · full implementation in the repository',footerDescription:'A small study in making motion feel right.',footerDemo:'Standalone demo ↗',footerLicense:'Code under MIT · Demo photos from Unsplash',footerDisclaimer:'Independent study. Not affiliated with Apple.',loading:'Preparing the playground…',ready:'Try the controls in the live playground.',
  },
  zh: {
    skip:'跳转到正文',brandSub:'关于手感的小实验',navTry:'现场试玩',navFilm:'演示视频',navDesign:'设计起点',star:'给项目一颗 Star',
    heroEyebrow:'手工打磨的交互实验 / 01',heroLine1:'轻轻一捏，',heroLine2:'看见更多。',heroDescription:'从一张照片，到满屏的小小回忆。一个受苹果相册启发、跟着手指变化的照片网格。',playDemo:'播放交互演示',openDemo:'打开独立试玩',heroNote:'这里可以直接操作：捏合、滚动，或使用底部控件。',densityCaption:'1 → 3 → 5 → 9 → 13 列。\n一次连续的手势。',metaVanilla:'原生 JavaScript',metaOpen:'开放源码',previewLabel:'实时交互原型',previewLive:'可以试玩',previewHint:'Ctrl + 滚轮缩放',previewCount:'864 张模拟照片',
    detail1Title:'始终看住那张照片。',detail1Text:'布局围绕焦点照片变化，放大缩小时更容易保持方向。',detail2Title:'让网格始终紧密。',detail2Text:'两层完整照片网格平滑过渡，保持密集相册的整体感。',detail3Title:'让动作轻轻停下来。',detail3Text:'柔和吸附、惯性滚动，再加上一点边缘回弹。',
    filmEyebrow:'把交互放进时间里',filmTitle:'一段小视频，\n一些小细节。',filmIntro:'录制自实际运行的浏览器原型。看看网格如何展开、收拢，再自然地停下来。',filmBadge:'演示 / MP4',filmSubTitle:'看见全貌，\n也看见细节。',filmText:'看住同一张照片，观察整个资料库如何围绕它变化。',chapter1:'连续变化的网格密度',chapter2:'以照片为中心的缩放',chapter3:'滚动、吸附，再来一次',downloadVideo:'下载演示视频',videoFallback:'当前浏览器不支持内嵌视频。',filmFootnote:'视频使用模拟资料录制，没有读取个人相册。',
    designEyebrow:'这个想法从哪里开始',designTitle:'先选相册，\n再按快门。',designIntro:'这个网格来自一个以相册为起点的相机概念：拍之前，就知道照片要放在哪里。下面是此前探索的界面视觉稿。',designHome:'以相册为起点的首页',designCreate:'给下一张照片一个位置',designSettings:'安静、实用的设置',concept:'视觉概念',designFootnote:'这些是视觉设计稿，尚未实现为 App 页面。上方可操作的原型专注于照片网格。',
    sourceEyebrow:'一个小项目，开放给所有人',sourceTitle:'拆开看看，\n继续打磨。',sourceText:'没有框架，也没有后端。只有照片网格、一些认真调整过的交互，以及可以直接阅读的源码。',sourceButton:'去 GitHub 看源码',sourceNote:'如果这个交互给了你一点灵感，一颗 Star 能让更多人发现它。',codeNote:'概念示意代码 · 完整实现在仓库中',footerDescription:'一个关于“动作怎样才舒服”的小实验。',footerDemo:'独立交互演示 ↗',footerLicense:'代码采用 MIT 协议 · 演示照片来自 Unsplash',footerDisclaimer:'独立交互研究，与 Apple 无关联。',loading:'正在准备交互原型…',ready:'可以在实时原型中直接操作。',
  }
};
const url = new URL(location.href);
let preferred;
try { preferred = localStorage.getItem('photo-grid-language'); } catch {}
let language = ['en','zh'].includes(url.searchParams.get('lang')) ? url.searchParams.get('lang') : preferred || (navigator.language.startsWith('zh') ? 'zh' : 'en');
if (!translations[language]) language = 'en';
const frame = document.getElementById('demo-frame');
const dialog = document.getElementById('image-dialog');
let toastTimer;
function showToast(text) { const toast=document.getElementById('toast');toast.textContent=text;toast.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2200); }
function applyLanguage(next, updateURL=true) {
  language=next; const t=translations[next];
  document.documentElement.lang=next==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(element=>{ const value=t[element.dataset.i18n];if(value!==undefined){element.textContent=value;element.style.whiteSpace=value.includes('\n')?'pre-line':'';} });
  const button=document.getElementById('language');button.textContent=next==='zh'?'EN':'中文';button.setAttribute('aria-label',next==='zh'?'Switch to English':'切换到中文');
  const title=next==='zh'?'Photo Grid Lab — 轻轻一捏，看见更多。':'Photo Grid Lab — One gesture. A whole library.';document.title=title;
  document.querySelector('meta[name=description]').content=t.heroDescription;
  document.getElementById('demo-video').setAttribute('aria-label',next==='zh'?'照片网格交互演示视频':'Photo grid interaction demo');
  document.getElementById('close-dialog').setAttribute('aria-label',next==='zh'?'关闭图片预览':'Close image preview');
  document.querySelector('nav').setAttribute('aria-label',next==='zh'?'主导航':'Main navigation');
  document.querySelectorAll('.design-image').forEach(button=>button.setAttribute('aria-label',(next==='zh'?'放大查看：':'Enlarge: ')+t[button.dataset.captionKey]));
  const demoURL=`demo/index.html?lang=${next}`;
  document.getElementById('fullscreen-demo').href=demoURL;document.getElementById('footer-demo').href=demoURL;
  frame.title=next==='zh'?'可操作的照片网格':'Interactive photo grid';
  if(!frame.src.endsWith(`lang=${next}&embed=1`))frame.src=`${demoURL}&embed=1`;
  if(dialog.open){const key=dialog.dataset.captionKey;document.getElementById('dialog-title').textContent=t[key];document.getElementById('dialog-image').alt=t[key];}
  try {localStorage.setItem('photo-grid-language',next);} catch {}
  if(updateURL){const nextURL=new URL(location.href);nextURL.searchParams.set('lang',next);history.replaceState(null,'',nextURL);}
}
document.getElementById('language').addEventListener('click',()=>applyLanguage(language==='zh'?'en':'zh'));
document.getElementById('play-demo').addEventListener('click',()=>{
  try {
    if(!frame.contentWindow.photoGrid?.state.ready){showToast(translations[language].loading);return;}
    const demoButton=frame.contentDocument.getElementById('demo');
    if(!demoButton.classList.contains('is-playing'))demoButton.click();
    if(matchMedia('(max-width:650px)').matches)frame.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'center'});
  } catch {showToast(translations[language].ready);}
});
document.querySelectorAll('.design-image').forEach(button=>button.addEventListener('click',()=>{
  dialog.dataset.captionKey=button.dataset.captionKey;
  const caption=translations[language][button.dataset.captionKey];
  document.getElementById('dialog-title').textContent=caption;
  const image=document.getElementById('dialog-image');image.src=button.dataset.image;image.alt=caption;
  dialog.showModal();
}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
applyLanguage(language,false);
