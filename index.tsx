import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (!container) {
  const errorMsg = "Fatal: Root element #root not found.";
  console.error(errorMsg);
  document.body.innerHTML = `<div style="color:red; padding:20px; font-family:sans-serif;">${errorMsg}</div>`;
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Zenith Photo App mounted successfully");
  } catch (error: any) {
    console.error("Mounting error:", error);
    container.innerHTML = `
      <div style="color:#ff4444; padding:40px; font-family:serif; background:#05070a; min-height:100vh;">
        <h1 style="border-bottom:1px solid #333; padding-bottom:10px;">Application Error</h1>
        <p style="margin-top:20px;">アプリの起動に失敗しました。以下のエラーメッセージを確認してください：</p>
        <pre style="background:#111; padding:20px; border-radius:4px; overflow:auto; margin-top:20px; font-size:14px; border:1px solid #444;">${error?.message || 'Unknown Error'}\n\n${error?.stack || ''}</pre>
        <p style="margin-top:20px; font-size:12px; color:#666;">※デベロッパーツール(F12)のConsoleタブも併せてご確認ください。</p>
      </div>
    `;
  }
}