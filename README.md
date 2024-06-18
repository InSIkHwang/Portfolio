ℹ 모바일 반응형 웹 구현 완료SIK'S FRONT-END PORTFOLIO ℹ
 👉👉 [바로가기](https://insikhwang.github.io/Portfolio)

모바일 반응형 웹 구현 완료

- Intro
  - framer-motion을 이용하여 인트로 페이지 구현

- About
  - 프로필 카드 구현
  - EXPERIENCE 탭 구현 및 모달 창 구현

- Skills
  - 아이콘 박스 구현
  - framer-motion를 이용한 애니메이션 구현
 
- Works
  - 버튼식 메뉴 헤더 구현
  - 이미지 리스트 구현
 
- Contact
  - 클릭 시 클립보드 복사 구현

---

### 🚀 개발환경

- 언어 : ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- 프론트 : ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- 배포 : ![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
- 라이브러리 : ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

### 📁 폴더 구조

-📂[src]  
 └── [Assets]  
     └── [img] - 이미지 폴더    
     └── [pdf] - PDF 폴더  
 └── [Components] ― 리액트 컴포넌트 폴더  
    └── Experience.tsx  
    └── ExperienceDetail.tsx - Experience 상세 모달창    
    └── Header.tsx
    └── Media.tsx - 반응형 웹 브레이크 포인트 및 미디어 쿼리 정의  
    └── Meteor.tsx - Intro 페이지 배경(별똥별)  
    └── ProfileCard.tsx - 프로필 카드 컴포넌트  
    └── Toast.tsx - 클립보드 복사 시 토스트 메세지  
    └── WorkItems.tsx - Works 세부 정보  
 └── [Routes]/_ ― 리액트 라우터 폴더  
    └── Contact.tsx - 연락처 페이지  
    └── Home.tsx  
    └── Info.tsx - About 페이지  
    └── Intro.tsx - Intro 페이지  
    └── Skills.tsx - 스킬 페이지  
    └── Works.tsx - Works 페이지  
 └── App.tsx ― 컴포넌트 라우팅  
 └── index.tsx  
