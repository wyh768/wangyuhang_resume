# 个人简历网站部署指南

## 一、Vercel 一键部署（推荐）

### 1. 推送代码到 GitHub
```bash
cd resume-site-generator
git init
git add .
git commit -m "feat: 个人简历网站"
git remote add origin https://github.com/你的用户名/resume-site.git
git push -u origin main
```

### 2. Vercel 导入项目
1. 访问 https://vercel.com 并用 GitHub 账号登录
2. 点击 "New Project" → 选择 `resume-site` 仓库
3. Framework Preset 选择 **Next.js**（自动检测）
4. 点击 "Deploy"，等待 1-2 分钟完成部署
5. 部署成功后会获得一个 `xxx.vercel.app` 的免费域名

### 3. 自定义域名
1. 在 Vercel 项目设置中 → "Domains" → 输入你的自定义域名
2. 根据提示在你的域名服务商处添加 DNS 记录：
   - 添加 CNAME 记录：`@ → cname.vercel-dns.com`
   - 或添加 A 记录：`@ → 76.76.21.21`
3. 等待 DNS 生效（通常几分钟到几小时）
4. Vercel 自动配置 SSL/HTTPS

---

## 二、域名购买建议

### 推荐域名服务商
| 服务商 | 特点 | 价格范围 |
|--------|------|----------|
| **Namecheap** | 便宜、免费Whois隐私 | .com ¥50-70/年 |
| **Cloudflare** | 成本价域名、免费DNS | .com ¥55/年 |
| **阿里云** | 国内备案方便 | .com ¥55-75/年 |
| **腾讯云** | 首年优惠大 | .com ¥29首年 |

### 推荐域名选择
- **姓名全拼**：`yuhangwang.com`、`wangyuhang.com`
- **姓名+dev**：`yuhang.dev`、`wyh.dev`
- **姓名+me**：`yuhang.me`、`wyh.me`
- **姓名+cc**：`yuhang.cc`

### 购买流程（以 Namecheap 为例）
1. 访问 https://www.namecheap.com
2. 搜索想要的域名
3. 选择域名 → 加入购物车
4. 开启 WhoisGuard（免费隐私保护）
5. 付款完成
6. 在 Domain 管理 → DNS 设置中添加 Vercel CNAME 记录

---

## 三、SEO 优化（让面试官搜索到你的网站）

### 1. 结构化数据（已集成在代码中）
网站已包含 OpenGraph 标签，确保在社交媒体分享时有正确预览。

### 2. Google Search Console 提交
1. 访问 https://search.google.com/search-console
2. 添加你的域名
3. 选择"域名"验证方式（添加 TXT 记录到 DNS）
4. 提交 sitemap：`https://你的域名/sitemap.xml`

### 3. sitemap 和 robots.txt
在 `src/app/` 下创建以下文件：

**sitemap.ts：**
```typescript
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://你的域名', lastModified: new Date() }]
}
```

**robots.ts：**
```typescript
import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://你的域名/sitemap.xml' }
}
```

### 4. 百度收录
1. 访问 https://ziyuan.baidu.com
2. 添加网站 → 验证域名
3. 提交链接

---

## 四、更新简历内容的工作流

### 方式一：直接修改代码
1. 编辑 `src/lib/sample-data.ts` 中的数据
2. 替换 `public/photos/photo.png` 中的照片
3. 推送到 GitHub → Vercel 自动重新部署

### 方式二：给其他人做简历网站
1. 获取对方的简历 PDF 和照片
2. 修改 `sample-data.ts` 中的所有字段
3. 选择喜欢的风格（修改 `page.tsx` 中的默认 style）
4. 如需自定义域名，在 Vercel 中更换
5. 推送部署

---

## 五、进阶功能（可选）

- **Google Analytics**：在 layout.tsx 中添加 GA 跟踪代码
- **自定义 404 页面**：创建 `src/app/not-found.tsx`
- **多语言支持**：使用 next-intl 实现中英文切换
- **项目展示图片**：在 projects 数据中添加 images 字段
