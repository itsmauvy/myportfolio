# myportfolio — 작업 계획 (인수인계)

> 이전 세션(구 repo `portfolio2026`)에서 합의한 내용을 정리한 문서.
> 새 세션에서 "티원, PLAN.md 보고 시작하자" 하면 이어서 진행.

## 0. 목적 / 포지셔닝
- **이 포트폴리오 = 학원 제출용.** 최대한 **심플·깔끔·담백**하게.
- 화려한 것(어워드급 모션·라이브 인터랙션·영상·게임 감성)은 **따로 만들 "게임 회사 취업용 포트폴리오"** 로 몰아준다. 여기서는 절제.
- 평가자(강사)가 **빠르게 훑고 "끝까지 깔끔하게 정리하는 사람"** 임을 확인하게 하는 게 목표. 완성도·과정 가시성·일관성 > 임팩트.

## 1. 컨셉 (한 줄)
**"중립적인 미니멀 프레임 안에, 프로젝트마다 그 제품다운 분위기를 입힌다."**
- 미술관 비유: **벽(쉘)은 하얗고 일정**, **걸린 작품(프로젝트)은 제각각**.
- 다양성(무드 × 작업유형)으로 **범용성("이런 것도 소화하네")** 증명 + 통일 쉘·골격으로 **정리력** 증명.

## 2. 프로젝트 4개 — 무드/유형 매핑

| # | 프로젝트 | 유형 | 무드 | 팔레트 방향 | 타이포 방향 |
|---|---|---|---|---|---|
| 1 | **ode** | 뷰티 브랜딩 (웹) | 프리미엄·에디토리얼 | 아이보리/베이지 + 딥다크 | 세리프 포인트 |
| 2 | **sledding** | 인디 게임 (웹) | 플레이풀·겨울·따뜻·귀여움 | 스노우 블루 + 포인트 | 라운드 산세리프 |
| 3 | **상상의문** | 방탈출 사이트 리디자인 (웹) | 다크·미스터리·몰입 | 딥다크 + 네온/앰버 포인트 | 무게감 디스플레이 |
| 4 | **노톡** | 모임 앱 기획 (앱/모바일) | 클린·프렌들리·소셜 | 화이트 + 친근한 1컬러 | 깔끔 산세리프 |

- 범위 축1(무드): 밝은프리미엄 / 따뜻플레이풀 / 다크몰입 / 클린프렌들리 — 서로 멀게.
- 범위 축2(작업유형): **브랜딩 0→1 / 인터랙션 구현 / 리디자인(개선·분석) / 앱 기획(IA·플로우)**.
- 매체: **웹 3 + 앱 1** (노톡은 폰 목업 중심 레이아웃).

## 3. 공통 케이스 골격 (4개 전부 동일 순서)
```
커버(키비주얼) → 개요(역할·기간·툴) → 문제정의 → UX 과정 → 디자인 → 결과·회고 → 다음 프로젝트
```

## 4. 폴더 구조 (제안)
```
myportfolio/
├ index.html              홈 — 중립 쉘 + 4개 프로젝트 그리드
├ css/
│  ├ base.css             쉘 · 공통 골격 공통 스타일(디자인 시스템)
│  └ themes/              프로젝트별 무드 (팔레트1 + 타입1)
│     ├ ode.css · sledding.css · sangsang.css · notalk.css
├ js/  main.js
├ work/  ode.html · sledding.html · sangsang.html · notalk.html
├ assets/ (이미지·폰트 — 구 repo에서 영상 빼고 가져옴)
├ CLAUDE.md (티원 팀)
└ PLAN.md
```

## 5. 규칙 (잠금)
- **영상 ❌** → 각 프로젝트 베스트 **정지 키비주얼 1장**으로 대체.
- **쉘(홈·내비·푸터)은 무채색·중립 1개** — 작품이 튀게.
- 무드는 **프로젝트당 팔레트1 + 타입1** 로만 (한 프로젝트 안에서 더 안 쪼갬).
- 모든 프로젝트 **같은 섹션 골격·같은 메타 표기(역할·기간·툴)**.
- 홈 그리드 **썸네일 규격 통일**(같은 비율·메타).
- 모션은 **은은한 페이드 정도까지만, 또는 없음** (학원용은 절제. rAF 동결로 프리뷰 모션 QA 어려우니 과욕 금지).
- 홈 배치 제안(명암 리듬): ode(밝은) → 상상의문(다크) → sledding(밝은) → 노톡(클린 앱).

## 6. 구 repo에서 재사용할 자산
- 위치: `C:\Users\수빈\Downloads\portfolio2026-main (1)\portfolio2026-main\`
- 가져올 것: 케이스 텍스트·카피, 프로젝트 정보, KEY INTERACTION 정리 내용, 이미지(`work/ode-images` 등·썸네일), 폰트(`fonts/`), 디자인 시스템 컬러.
- **영상 제외**: `ode-video.mp4`, `sledding-hero.mp4`.
- 구 repo 라이브 사이트 참고: sledding 게임 `https://itsmauvy.github.io/sledding_game/` (※ 라이브 사이트는 건드리지 않음).

## 7. 추천 시작점
1. **공통 골격(섹션 구성) 확정** — 4개 다 이 틀로.
2. **ode 케이스 템플릿 1개를 기준으로 완성** → 그걸 틀로 나머지 3개 찍어내기 (가장 깔끔·일관).
3. 상상의문·노톡은 아직 케이스 콘텐츠가 없으니 **콘텐츠부터** 정리 필요.

## 8. 진행 상황 (작업 로그)

### ✅ 2026-06-21 — 쉘+홈 토대 완성 (검증 완료)
- **폴더 구조 생성**: `css/base.css`, `css/themes/{ode,sledding,sangsang,notalk}.css`, `js/main.js`, `assets/{fonts,images}`.
- **자산 이식** (구 repo → `assets/`, **영상 전부 제외**): ode 이미지 22장, sledding 44장, profile·스티커, MonkeyLove 폰트.
- **`css/base.css` = 디자인 시스템(잠금)**:
  - 토큰: 무채색 쉘 팔레트, 타입 스케일, 간격 스케일(8px 베이스), 컨테이너 1200/gutter clamp.
  - 쉘: 고정 헤더(블러), 푸터.
  - **공통 케이스 골격 클래스**: `.case-cover`(영상❌ 정지 키비주얼), `.case-meta`(역할·기간·툴 통일 포맷), `.case-section`, `.case-head`, `.case-next`. → ode부터 이걸로 조립.
  - 홈: 히어로 + `.work-grid`(4:3 통일 썸네일·무드 칩) + about + 푸터.
  - 테마 진입점 변수: `--bg/--fg/--muted/--line/--accent/--font-head` 만 themes/*.css에서 교체.
- **`index.html`**: 무채색 홈. 진입 즉시 "누구+무엇" 보임(히어로 above-fold). 4카드 명암 리듬 순서(ode→상상의문→sledding→노톡). 상상의문·노톡은 `COMING SOON` 플레이스홀더.
- **`js/main.js`**: 절제 모션만 — IntersectionObserver 페이드+상승(`.reveal`), reduced-motion·미지원 시 즉시 표시. GSAP/Lenis/파티클 전부 제거.
- **테마 4종 스텁**: 팔레트+헤드라인 폰트 잠금. ode는 구 repo 팔레트(Ivory/Beige/Mocha/Taupe)+고운바탕 그대로.
- **검증**(preview, python http.server :5500): 데스크톱 2단/모바일 1단, 가로 오버플로우 0, 콘솔 에러 0, 이미지 로드 정상.
- **프리뷰 실행**: `.claude/launch.json`에 `portfolio` 설정(python -m http.server 5500).

### ✅ 2026-06-21 (2) — 컨셉 전환: 벤토 허브 + 고정 레일 (검증 완료)
- 레퍼런스 반영(vexoo/drkst): 홈을 **무채색 미니멀 → 벤토 허브 + 다크/라이트**로 전환.
- **최종 홈 구조** (`index.html`, home-lab 승격): **히어로(1화면 키네틱 타이포) → 스크롤 1회 → 벤토 허브(1화면)**. 거대 SOOBIN이 글래스 카드 뒤로 60%/40% 프로스트(vexoo형). 작업 4칸 + About·Resume·Contact·Stack·사원증. 호버 무드 점등, 카드 드롭인, 라이브 시계, 3D 틸트 사원증, 다크/라이트 토글(localStorage).
- **원칙 잠금**: 클릭·스크롤 최소화 (메모리 `layout-minimize-click-scroll`).
- **고정 프로젝트 레일** (`base.css .case-rail`): 모든 케이스 상단에 Home + 4프로젝트 탭 + **▶ VIEW LIVE SITE** 항상 노출 → "들락날락 루프" 제거. 케이스 테마 팔레트 상속.
- **케이스 2개 제작**: `work/ode.html`(ode 테마, 대표 콘텐츠: 커버·메타·개요·문제·기회·디자인시스템·UI·결과), `work/sledding.html`(sledding 테마, LIVE=게임 URL 연결). 레일로 ode↔sledding 직접 점프 검증.
- 검증: 홈·ode·sledding 전부 오버플로우 0, 콘솔 0, 이미지 로드 정상, 테마 적용 정상.
- **랩 파일**(hero-lab/lanyard-lab/bento-lab/home-lab)은 탐색 흔적 — 확정 후 정리 예정.

### ✅ 2026-06-21 (3) — 구 케이스 원본 그대로 이식 (검증 완료)
- 방침 변경: ode/sledding 케이스를 **축약 재조립 ❌ → 구 repo 원본 그대로 ✅** (사용자 요청 "똑같이").
- **누락 자산 발견·복사**: 구 `work/ode-images/`(61장, 제품컷·브랜드스토리) → `assets/images/ode-images/`. (구 ode.html은 `../images/ode/` + `ode-images/` 두 경로 사용.)
- 구 `work/ode.html`(93KB)·`work/sledding.html`(53KB) 원본 복사 후:
  - 경로 일괄 수정: `../images/ode/`→`../assets/images/ode/`, `ode-images/`→`../assets/images/ode-images/`, `../images/sledding/`→`../assets/images/sledding/`.
  - **영상 → 정지 키비주얼** (ode: ode-hero.jpg / sledding: sledding-hero-screen.png). PLAN 규칙 준수.
  - 구 헤더(BACK+WORK/ABOUT/CONTACT) → **고정 프로젝트 레일**(자체 스타일 `.pf-rail`: Home + 4탭 + ▶VIEW LIVE SITE)로 교체. 본문 디자인·GSAP 모션은 원본 그대로 유지.
  - sledding 히어로 img opacity 보정(원본은 영상에 .ready 부여하던 구조).
- 검증: 양쪽 이미지 전수 로드(누락 0)·콘솔 0·레일 점프·LIVE(sledding=게임 URL) 정상.

### ✅ 2026-06-21 (4) — 시네마틱 인트로 확정·병합 (검증 완료)
- 레퍼런스(eszterbial·wemade·abhijitrout) 종합 → **인트로 오버레이**: 키네틱 텍스트(문제를 정의하고→설계하고→완성합니다) → 오로라 그라데이션 번짐 → 블랙 원형 차오름 → 오버레이 걷히며 **그 자리에서 허브가 조립되며 등장**(카드 캐스케이드 + 거대 이름 마지막에 resolve = 클라이맥스).
- 피드백 반영: 그라데이션 밴딩 제거(헤비 블러+screen 블렌드), 블랙은 평면시트❌ 원형 차오름, "허브가 아래 쌓임" 문제→오버레이 방식으로 제자리 등장, 인트로 길이 단축(~3s), **색 = 흰색/모노 글로우 확정**(레드·블루 탈락).
- setTimeout 기반(백그라운드 탭 안전) · 스크롤/터치/키로 스킵 · reduced-motion 시 인트로 건너뜀.
- **`index.html`에 병합 완료**(home-lab→intro 추가본). 팔레트 비교 바 제거. 검증: 인트로 완주·허브 조립·링크·콘솔 0.
- 랩 파일(hero/lanyard/bento/home/intro-lab) = 탐색 흔적, 정리 대기.

### ⏭ 다음 (추천 순서)
0. **미확정**: ① 기본 테마(다크/라이트) ② 사원증 3D틸트 vs 드래그물리 ③ ode **VIEW LIVE SITE 실제 URL**(현재 `#` 임시) ④ 거대이름/카피 확정.
1. **ode 케이스 페이지 신규 작성** (`work/ode.html`) — 구 `ode.html`에서 **카피·구조·이미지만 추출**해 `base.css` + `themes/ode.css` 골격에 재조립. 영상 히어로 → `ode-hero.jpg` 정지 키비주얼. **이게 "기준 템플릿".**
2. ode 틀로 **sledding 이식** (`work/sledding.html`, theme: sledding).
3. **상상의문·노톡 콘텐츠 기획부터** (문제정의·UX·IA·플로우) → 이후 디자인/퍼블리싱.

> ⚠️ 홈의 `work/ode.html`·`work/sledding.html` 링크는 아직 파일 없음 → 404. 위 1·2 작업 시 생성됨.
