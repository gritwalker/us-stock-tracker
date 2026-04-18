# US Stock Tracker

실시간 미국 주요 주식 가격을 확인할 수 있는 웹 애플리케이션입니다.

## 🚀 기능

- **실시간 주식 데이터**: Apple, Microsoft, Google, Amazon 등 주요 미국 기업 주식 정보
- **모던 UI**: shadcn/ui를 활용한 깔끔하고 반응형 디자인
- **섹터별 필터링**: 기술주, 금융주, 소비재주 등 카테고리별 조회
- **상세 정보**: 가격, 변동률, 거래량, 시가총액 등 종합 정보 제공
- **검색 기능**: 주식 심볼로 빠르게 검색

## 🛠 기술 스택

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **shadcn/ui** - 모던 UI 컴포넌트
- **Lucide React** - 아이콘 라이브러리

## 📦 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/[username]/us-stock-tracker.git
cd us-stock-tracker

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 🚀 배포

GitHub Pages로 배포된 웹사이트: [https://[username].github.io/us-stock-tracker/](https://[username].github.io/us-stock-tracker/)

### 배포 방법

```bash
# 빌드 및 배포
npm run deploy
```

## 📊 데이터 소스

- Alpha Vantage API (15분 지연 실시간 데이터)
- 샘플 데이터는 데모용으로 제공됩니다.

## 📱 화면 구성

1. **메인 대시보드**: 주요 주식 카드 그리드
2. **헤더**: 검색 및 네비게이션
3. **필터 섹션**: 섹터별 주식 필터링
4. **정보 섹션**: 투자 참고사항 및 시장 정보

## 🔧 환경 설정

`.env.local` 파일을 생성하여 API 키 설정:

```env
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_api_key_here
```

## 📄 라이선스

MIT License

## 🤝 기여

버그 리포트나 기능 제안은 Issue를 통해 남겨주세요.
Pull Request도 환영합니다.

---

**주의**: 본 애플리케이션은 데모용으로 제작되었으며, 실제 투자 결정을 위한 정보로 사용해서는 안 됩니다.
