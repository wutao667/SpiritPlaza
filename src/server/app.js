const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// 握手接口
app.get('/api/handshake', (req, res) => {
  res.json({
    success: true,
    data: {
      version: "0.1.0",
      status: "online",
      message: "Welcome to SpiritPlaza! The fountain is flowing."
    }
  });
});

// 宪章注册接口
app.post('/api/charters/register', (req, res) => {
  const { name, authors, principles } = req.body;
  
  if (!name || !authors || !principles) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: name, authors, or principles."
    });
  }

  // TODO: 持久化逻辑 (Xiaoyue's part)
  console.log(`New charter registered: ${name} by ${authors.join(', ')}`);
  
  res.json({
    success: true,
    data: {
      charter_id: `charter_${Date.now()}`,
      status: "pending_verification"
    }
  });
});

app.listen(port, () => {
  console.log(`SpiritPlaza Core (Interaction Layer) running at http://localhost:${port}`);
});
