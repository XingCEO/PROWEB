import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'neural-dashboard',
    title: '智能數據儀表板',
    description: '即時分析儀表板，運用機器學習提供預測性洞察與自動異常偵測，服務企業級客戶。',
    longDescription: `智能數據儀表板是一個企業級分析平台，運用機器學習技術提供即時可操作的洞察。

## 主要功能
- **即時資料處理**：每秒處理數百萬事件，延遲低於毫秒級
- **預測分析**：機器學習模型預測趨勢，在影響業務前識別模式
- **異常偵測**：自動警報系統，在問題擴大前及時發現
- **自訂儀表板**：拖放式介面，建立個人化視圖

## 技術挑戰
最大的挑戰是實現大規模即時機器學習推論。我們透過使用 Apache Kafka 和 TensorFlow Serving 建立自訂串流管道來解決，達成 99.9% 運行時間，回應時間低於 50 毫秒。`,
    image: '/projects/neural-dashboard.jpg',
    tags: ['React', 'TypeScript', 'Python', 'TensorFlow', 'Kafka'],
    liveUrl: 'https://neural-dashboard.demo',
    githubUrl: 'https://github.com/developer/neural-dashboard',
    featured: true,
  },
  {
    id: 'cryptoflow',
    title: 'CryptoFlow',
    description: '去中心化金融 (DeFi) 平台，實現無縫跨鏈代幣交換，具備最低 Gas 費用和最高安全性。',
    longDescription: `CryptoFlow 透過讓跨鏈交易對所有人可及，革新了 DeFi 領域。

## 主要功能
- **跨鏈交換**：無縫交易超過 10 條區塊鏈上的代幣
- **Gas 優化**：專有路由演算法減少高達 40% 的費用
- **非託管**：用戶始終保持對資產的完全控制
- **MEV 保護**：內建防止搶跑攻擊的保護

## 技術實現
基於使用零知識證明進行安全驗證的自訂橋接協議建構。智能合約經過三家獨立安全公司審計。`,
    image: '/projects/cryptoflow.jpg',
    tags: ['Solidity', 'React', 'Web3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://cryptoflow.demo',
    githubUrl: 'https://github.com/developer/cryptoflow',
    featured: true,
  },
  {
    id: 'devops-automation',
    title: 'DevOps 自動化套件',
    description: '一站式 DevOps 平台，為開發團隊自動化 CI/CD 管道、基礎設施佈建和監控。',
    longDescription: `全面的 DevOps 自動化平台，旨在減少部署摩擦並提高團隊效率。

## 主要功能
- **一鍵部署**：從提交到生產環境只需幾分鐘
- **基礎設施即程式碼**：Terraform 和 Pulumi 整合
- **監控與警報**：整合可觀測性堆疊
- **成本優化**：AI 驅動的資源建議

## 影響
為早期採用者減少 80% 的部署時間和 35% 的基礎設施成本。`,
    image: '/projects/devops-suite.jpg',
    tags: ['Go', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus'],
    liveUrl: 'https://devops-suite.demo',
    githubUrl: 'https://github.com/developer/devops-suite',
    featured: true,
  },
  {
    id: 'ai-writer',
    title: 'AI 內容寫手',
    description: 'AI 驅動的內容生成工具，幫助行銷人員大規模創建吸引人的文案、部落格文章和社群媒體內容。',
    longDescription: `AI 內容寫手運用大型語言模型幫助內容創作者更有效率地工作。

## 主要功能
- **多格式生成**：部落格文章、電子郵件、社群媒體等
- **品牌語調訓練**：學習並複製您獨特的風格
- **SEO 優化**：內建關鍵字分析與優化
- **協作工具**：團隊工作流程和審批流程

## 技術
使用自訂訓練資料微調的 LLM，部署在可擴展的無伺服器架構上。`,
    image: '/projects/ai-writer.jpg',
    tags: ['Next.js', 'OpenAI', 'Python', 'FastAPI', 'Redis'],
    liveUrl: 'https://ai-writer.demo',
    githubUrl: 'https://github.com/developer/ai-writer',
    featured: false,
  },
  {
    id: 'mobile-fitness',
    title: 'FitTrack Pro',
    description: '跨平台健身追蹤應用程式，具備個人化訓練計劃、營養追蹤和社交功能。',
    longDescription: `FitTrack Pro 是注重健康人士的全方位健身夥伴。

## 主要功能
- **AI 訓練計劃**：基於目標和進度的個人化課程
- **營養追蹤**：條碼掃描和餐點記錄
- **社交挑戰**：與朋友競爭並加入社群活動
- **穿戴裝置整合**：與所有主要健身設備同步

## 成果
超過 10 萬次下載，在兩個應用商店獲得 4.8 星評價。`,
    image: '/projects/fittrack.jpg',
    tags: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase'],
    liveUrl: 'https://fittrack.demo',
    githubUrl: 'https://github.com/developer/fittrack',
    featured: false,
  },
  {
    id: 'ecommerce-platform',
    title: 'ShopNest',
    description: '無頭電商平台，具備進階庫存管理、多供應商支援和無縫支付整合。',
    longDescription: `ShopNest 是為規模和彈性而建構的現代電商解決方案。

## 主要功能
- **無頭架構**：使用任何前端框架
- **多供應商**：內建市集功能
- **智慧庫存**：AI 驅動的庫存預測
- **全球支付**：支援超過 50 種支付方式

## 效能
處理 1 萬並發用戶，99.99% 運行時間。`,
    image: '/projects/shopnest.jpg',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://shopnest.demo',
    githubUrl: 'https://github.com/developer/shopnest',
    featured: false,
  },
]
