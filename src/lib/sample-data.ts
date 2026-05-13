import { ResumeData } from './types';

export const sampleResumeData: ResumeData = {
  personal: {
    name: '王昱航',
    nameEn: 'Yuhang Wang',
    title: 'AI研发 & Agent应用开发',
    titleEn: 'AI Developer',
    photo: '/photos/photo.png',
    phone: '152-8109-5134',
    email: '3230105887@zju.edu.cn',
    location: '杭州',
    github: 'https://github.com/wyh768',
  },
  summary:
    '我构建 AI Agent、自动化工作流和高转化的数字产品，帮助客户节省时间、减少重复劳动，更快地将创意变为可运行的产品。',
  aboutMe:
    '你好！我是王昱航——浙江大学本科生，专注于 AI 自动化开发，擅长构建实用的 AI Agent、工作流自动化和简洁的 Web 应用。我熟练连接 API、设计高效的用户流程，将业务问题转化为可靠的软件解决方案。长期高频使用 Cursor、Claude Code、ChatGPT、DeepSeek 等 AI 编程与大模型工具，熟悉 Prompt Engineering、Vibecoding、Agent 工作流、AI 辅助代码生成与调试。',
  education: [
    {
      school: '浙江大学',
      degree: '本科',
      major: '生物医学工程',
      college: '生物医学工程与仪器科学学院',
      location: '杭州',
      startDate: '2023.09',
      endDate: '2027.06',
      gpa: '3.90 / 4.0',
    },
  ],
  coreStrengths: [
    'AI编程工具：高频使用 Cursor、Claude Code、ChatGPT、DeepSeek 等工具完成需求拆解、代码生成、Bug定位、页面优化和文档撰写',
    'Agent应用理解：关注 Agent 任务拆解、工具调用、记忆管理、多智能体协作、Skill/MCP 等机制，具备独立搭建Demo的实践经验',
    'Prompt Engineering：能根据任务目标设计Prompt、约束输入输出格式、拆分复杂任务，通过多轮调优提升模型输出质量',
    '工程实现能力：具备 Python、HTML/CSS/JavaScript 基础，可借助AI工具快速开发小程序、网页Demo、自动化脚本和数据处理流程',
    'AI搜索与评估：熟悉AI辅助文献调研、信息检索、竞品分析和结果评估，能从准确性、完整性、可用性等维度判断模型输出',
  ],
  skills: [
    {
      category: 'AI / Agent',
      items: ['Cursor', 'Claude Code', 'ChatGPT', 'DeepSeek', 'Prompt Engineering', 'Vibecoding', 'Agent工作流', '工具调用', '多智能体协作', 'Skill/MCP'],
    },
    {
      category: '编程 / 工程',
      items: ['Python', 'HTML/CSS/JavaScript', '小程序开发', '网页Demo', '自动化脚本', '数据处理'],
    },
    {
      category: '办公 / 表达',
      items: ['Excel', 'PowerPoint', 'Word', '项目材料撰写', '答辩展示', '信息归纳'],
    },
    {
      category: '语言',
      items: ['中文(母语)', 'CET-6 600+', 'CET-4 550+', '英文阅读/写作/翻译'],
    },
  ],
  services: [
    { id: '001', title: 'AI Agent 开发', description: '为研究、写作、数据处理、客户支持和工作流自动化构建定制 AI Agent。' },
    { id: '002', title: '工作流自动化', description: '使用 API、Webhook 和 AI 模型集成，自动化业务工作流。' },
    { id: '003', title: 'Web 应用开发', description: '使用现代前端技术构建简洁、响应式、可上线的网站和仪表盘。' },
    { id: '004', title: 'API 集成', description: '将第三方服务、数据库、AI 模型和内部工具连接成一个无缝系统。' },
    { id: '005', title: 'Prompt 工程', description: '设计可靠的 Prompt、结构化输出和 AI 工作流，产出一致且高质量的结果。' },
  ],
  stats: [
    { label: '客户满意度', value: '95%', percentage: 95 },
    { label: '时间节省', value: '70%', percentage: 70 },
    { label: '自动化构建', value: '30+', percentage: 85 },
    { label: '项目交付', value: '20+', percentage: 75 },
    { label: '工具集成', value: '10+', percentage: 60 },
  ],
  projects: [
    {
      name: '个人 GitHub AI 作品集',
      role: 'AI应用Demo / Agent工作流',
      period: '2025 – 至今',
      video: '/claudio-promo.mp4',
      description: [
        '围绕AI应用开发持续建设个人作品集，项目方向包括Agent工作流Demo、AI辅助网页开发、小程序原型、自动化脚本和Prompt模板沉淀',
        '使用 Cursor/Claude Code/ChatGPT 完成需求分析、代码生成、调试修复和README文档撰写，实践"自然语言需求→可运行项目"的开发流程',
        '关注项目可展示性与可复用性，整理项目背景、功能说明、技术栈、运行方式和迭代记录',
      ],
    },
    {
      name: 'AI辅助 Vibecoding 实践',
      role: '小程序/Web项目开发',
      period: '2025 – 至今',
      video: '/shijuweijia-promo.mp4',
      description: [
        '使用AI编程工具完成网页和小程序类项目开发，实践从需求描述、页面结构设计、交互实现到部署上线的完整流程',
        '通过多轮Prompt调优实现页面样式优化、移动端适配、功能补全和Bug修复',
        '积累了AI辅助前端开发、组件复用、部署调试、用户体验优化等经验',
      ],
    },
    {
      name: '多智能体协作与 Skill 工作流实践',
      role: 'Agent方法探索',
      period: '2025 – 至今',
      description: [
        '学习并实践多智能体协作思路，将复杂任务拆分为规划、开发、测试、审美优化、布局检查等子任务',
        '尝试整理可复用的Skill/Prompt文档，用于规范模型在特定任务中的输入、输出、步骤和质量标准',
        '理解Agent在任务规划、上下文隔离、工具调用和结果校验中的价值',
      ],
    },
    {
      name: '国家级大学生创新竞赛项目',
      role: '项目参与者 / 答辩人',
      period: '2025.05 – 2025.07',
      description: [
        '参与智能医疗器械与智能助残方向项目，负责文献调研、产品调研、竞品分析、答辩PPT与展示材料制作',
        '作为答辩人完成项目陈述和现场问答，锻炼了复杂问题拆解、逻辑表达和快速应变能力',
        '成果：全国"智能助残"科技创意创新大赛二等奖；全国大学生生物医学工程创新设计大赛国家级一等奖',
      ],
    },
    {
      name: '浙江大学赴丽水市龙泉市暑期社会实践',
      role: '立项人 / 队长',
      period: '2024.07',
      description: [
        '负责项目立项、任务分工、实地调研、内容采集、成果整理和答辩展示，项目获校级优秀团队',
        '运营项目小红书账号，产出Vlog与图文笔记，具备内容策划、用户传播和文字表达经验',
      ],
    },
  ],
  experience: [
    { role: 'AI 自动化开发者', company: '个人项目 / Upwork', period: '2025 – 至今' },
    { role: '前端开发者', company: '个人项目', period: '2024 – 至今' },
    { role: 'AI Agent 构建者', company: '独立项目', period: '2024 – 至今' },
    { role: 'Python 开发者', company: '学术 / 实验室', period: '2023 – 至今' },
  ],
  leadership: [
    {
      organization: '浙江大学云峰学园学生会',
      role: '文艺部部长',
      period: '2024.09 – 2025.06',
      description: [
        '策划并组织云峰十佳歌手、棉花糖音乐节等大型活动，服务人次4000+',
        '负责策划案、宣传材料、现场流程与突发情况处理',
      ],
    },
    {
      organization: '生仪学生会',
      role: '文体部干事',
      period: '2023.09 – 2024.06',
      description: [
        '先后参与组织了校运会、新年晚会等多项大型活动，熟练掌握现场调度、物料准备等工作',
      ],
    },
  ],
  awards: [
    '浙江省政府奖学金 (2023-2024)',
    '全国"智能助残"科技创意创新大赛暨智能医疗器械创新大赛二等奖 (2025)',
    '第十届全国大学生生物医学工程创新设计大赛国家级一等奖 (2025)',
    '浙江大学暑期社会实践校级优秀团队 (2024)',
  ],
  testimonials: [
    { name: '张教授', role: '浙江大学生医学院', text: '昱航在竞赛项目中展现了出色的AI工具使用能力和快速学习能力，文献调研和产品分析的质量远超本科生平均水平。' },
    { name: '李同学', role: '项目合作伙伴', text: '和昱航合作非常顺畅，他能用AI工具快速搭建原型，效率极高。对Agent工作流的理解也很深入。' },
    { name: '王学长', role: '学生会同事', text: '昱航在组织活动时展现了强大的执行力和应变能力，策划方案清晰，现场调度有条不紊。' },
    { name: '陈导师', role: '竞赛指导老师', text: '昱航的答辩表现出色，逻辑清晰，临场反应快，是一位非常有潜力的学生。' },
    { name: '赵同学', role: '实践队成员', text: '作为队长，昱航的责任心和领导力让人印象深刻，整个社会实践项目在他的带领下高效推进。' },
    { name: '刘老师', role: '辅导员', text: '昱航是一个全面发展的学生，学术成绩优秀，组织能力突出，对AI技术有独特的理解和热情。' },
  ],
  languages: ['中文(母语)', '英语 CET-6 600+ / CET-4 550+', '英文文献翻译/口语交流'],
  interests: ['Vibe Coding 开发小程序', 'AI应用探索', '看美剧'],
};
