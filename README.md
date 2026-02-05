# 일본어 단어 퀴즈

Resend를 활용한 이메일 발송 기능이 포함된 일본어 퀴즈 웹사이트입니다.

**GitHub**: [thejoajin-stack/japan2](https://github.com/thejoajin-stack/japan2)

## GitHub 동기화 (변경 사항 반영)

수정한 내용을 GitHub에 반영하려면:

### 방법 1: push.bat 실행
프로젝트 폴더에서 `push.bat` 더블클릭

### 방법 2: 터미널에서 수동 실행
```bash
git add .
git commit -m "Update: 변경 내용 설명"
git push origin main
```

### 최초 1회 설정 (원격 저장소 연결)
```bash
git init
git remote add origin https://github.com/thejoajin-stack/japan2.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 설치 및 실행

### 1. Resend API 키 발급

1. [resend.com](https://resend.com)에서 회원가입
2. 대시보드 → API Keys에서 API 키 생성
3. `re_` 로 시작하는 키 복사

### 2. 환경 변수 설정

```bash
# .env.example을 복사하여 .env 파일 생성
copy .env.example .env

# .env 파일을 열어 RESEND_API_KEY 입력
# RESEND_API_KEY=re_여기에_발급받은_키_입력
```

### 3. 의존성 설치 및 서버 실행

```bash
npm install
npm start
```

### 4. 브라우저에서 접속

http://localhost:3000

## 이메일 발송

- 이메일 입력 없이 **이메일로 결과 보내기** 클릭 시 → `thejoajin@gmail.com`으로 발송
- 이메일 입력 시 → 입력한 주소로 발송
- Resend 무료 플랜: 월 3,000통, 일 100통
- 도메인 미인증 시 `onboarding@resend.dev`에서 발송 (테스트용)
