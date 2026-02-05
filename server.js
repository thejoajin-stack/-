require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 퀴즈 결과 이메일 전송 API
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({ success: false, error: '필수 항목이 누락되었습니다.' });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ success: false, error: 'RESEND_API_KEY가 설정되지 않았습니다.' });
    }

    const fromEmail = process.env.FROM_EMAIL || '일본어퀴즈 <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [to],
      subject,
      html: body.replace(/\n/g, '<br>'),
      text: body,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, id: data?.id, message: '이메일이 발송되었습니다.' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ success: false, error: '이메일 발송 중 오류가 발생했습니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️ RESEND_API_KEY를 .env 파일에 설정해 주세요.');
  }
});
