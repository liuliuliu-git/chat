# 📱 实时聊天应用

一个前后端分离的实时聊天应用，包含两个主要部分：基于 Expo 的 React Native 移动应用作为前端，和基于 NestJS 的 API 服务作为后端。

## 📁 项目结构
project-root/
├── chatapp/        # React Native 前端（Expo 框架）
├── chatbackend/    # NestJS 后端服务
└── README.md

深色版本

## 🚀 快速开始

### 🔧 启动前端（React Native + Expo）

在 `chatapp` 目录下执行以下命令来启动前端应用：

```bash
cd chatapp
npm install
npx expo start
🖥 启动后端（NestJS）
在 chatbackend 目录下执行以下命令来启动后端服务：

bash

cd chatbackend
npm install
npm run start:dev 
默认情况下，后端服务将在 http://localhost:3000 运行。

📦 技术栈
层级	技术
前端	React Native (Expo)
后端	NestJS（Node.js + TypeScript）
通信	WebSocket（或 HTTP / REST 接口）
状态管理（可选）	Zustand / Redux
数据库（可选）	MongoDB / PostgreSQL / SQLite