#!/usr/bin/env python3
"""Parse a PDF resume and output structured JSON."""
import sys
import json
import re
import pdfplumber


def parse_resume(pdf_path: str) -> dict:
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                full_text += t + "\n"

    lines = [l.strip() for l in full_text.split("\n") if l.strip()]

    # Name: first non-empty line that looks like a name (2-4 Chinese chars or English name)
    name = ""
    name_en = ""
    for line in lines[:5]:
        cn = re.match(r'^([\u4e00-\u9fff]{2,4})$', line)
        if cn:
            name = cn.group(1)
            continue
        en = re.match(r'^([A-Z][a-z]+ [A-Z][a-z]+)$', line)
        if en:
            name_en = en.group(1)
            continue

    # Phone
    phone = ""
    phone_match = re.search(r'1[5-9]\d[\-\s]?\d{4}[\-\s]?\d{4}', full_text)
    if phone_match:
        phone = phone_match.group(0)

    # Email
    email = ""
    email_match = re.search(r'[\w.+-]+@[\w-]+\.[\w.-]+', full_text)
    if email_match:
        email = email_match.group(0)

    # GitHub
    github = ""
    gh_match = re.search(r'github\.com/[\w-]+', full_text)
    if gh_match:
        github = "https://" + gh_match.group(0)

    # Location
    location = ""
    loc_match = re.search(r'(杭州|北京|上海|深圳|广州|成都|南京|武汉)', full_text)
    if loc_match:
        location = loc_match.group(1)

    # Education
    education = []
    edu_match = re.search(r'([\u4e00-\u9fff]*大学)[\s\S]*?(本科|硕士|博士|硕士|PhD|Bachelor)', full_text)
    if edu_match:
        school = edu_match.group(1)
        degree = "本科" if "本科" in edu_match.group(2) else edu_match.group(2)

        major = ""
        major_match = re.search(r'(生物医学工程|计算机|软件|电子|自动化|机械|数学|物理|化学|经济|管理|金融)[\u4e00-\u9fff]*', full_text)
        if major_match:
            major = major_match.group(0)

        college = ""
        college_match = re.search(r'([\u4e00-\u9fff]*学院)', full_text)
        if college_match:
            college = college_match.group(1)

        gpa = ""
        gpa_match = re.search(r'GPA[:\s]*(\d+\.?\d*\s*/\s*\d+\.?\d*)', full_text, re.IGNORECASE)
        if gpa_match:
            gpa = gpa_match.group(1)

        start_date = ""
        end_date = ""
        date_match = re.search(r'(\d{4}\.\d{2})\s*[–\-—]\s*(\d{4}\.\d{2})', full_text)
        if date_match:
            start_date = date_match.group(1)
            end_date = date_match.group(2)

        courses = []
        course_match = re.search(r'课程[：:]\s*([\u4e00-\u9fff、\w\s,，.．]+)', full_text)
        if course_match:
            courses = [c.strip() for c in re.split(r'[、,，．.]', course_match.group(1)) if c.strip()]

        education.append({
            "school": school,
            "degree": degree,
            "major": major,
            "college": college,
            "location": location,
            "startDate": start_date,
            "endDate": end_date,
            "gpa": gpa,
            "courses": courses,
        })

    # Summary
    summary = ""
    summary_match = re.search(r'(求职总结|Profile|Summary)[：:\s]*\n([\s\S]*?)(?=\n教育|Education|\n核心|Core)', full_text, re.IGNORECASE)
    if summary_match:
        summary = summary_match.group(2).strip().replace('\n', ' ')

    # Core Strengths
    core_strengths = []
    strength_section = re.search(r'(核心优势|核心能力|Core Strengths)[：:\s]*\n([\s\S]*?)(?=\n项目|Project|\n技能|Skill)', full_text, re.IGNORECASE)
    if strength_section:
        block = strength_section.group(2)
        bullets = re.findall(r'[•·\-\*]\s*(.{10,})', block)
        core_strengths = [b.strip() for b in bullets if b.strip()]

    # Skills
    skills = []
    skill_section = re.search(r'(技能|Skills)[：:\s]*\n([\s\S]*?)(?=\n项目|Project|\n组织|Leadership)', full_text, re.IGNORECASE)
    if skill_section:
        block = skill_section.group(2)
        # Try to find category: items pattern
        cat_matches = re.findall(r'([\u4e00-\u9fff\w/ ]+?)[：:]\s*(.+?)(?=\n[\u4e00-\u9fff\w]+[：:]|\n\n|\Z)', block, re.DOTALL)
        for cat, items_str in cat_matches:
            items = [i.strip() for i in re.split(r'[、,，\n]', items_str) if i.strip() and len(i.strip()) > 1]
            if items:
                skills.append({"category": cat.strip(), "items": items})
        if not skills:
            # Fallback: all skills in one group
            items = [i.strip() for i in re.split(r'[、,，\n•·]', block) if i.strip() and len(i.strip()) > 1]
            if items:
                skills.append({"category": "技能", "items": items})

    # Projects
    projects = []
    proj_section = re.search(r'(项目经历|Project Experience)[：:\s]*\n([\s\S]*?)(?=\n组织|Leadership|\n荣誉|Award)', full_text, re.IGNORECASE)
    if proj_section:
        block = proj_section.group(2)
        proj_blocks = re.split(r'\n(?=[•·\-\*]?\s*[^\n]*(?:项目|实践|GitHub|Vibecoding|Agent))', block)
        for pb in proj_blocks:
            if not pb.strip():
                continue
            name_match = re.match(r'\s*[•·\-\*]?\s*(.+?)(?:\s*[|｜]\s*|\s{2,})', pb)
            proj_name = name_match.group(1).strip() if name_match else ""
            role_match = re.search(r'[|｜]\s*(.+?)(?:\s{2,}|\n)', pb)
            role = role_match.group(1).strip() if role_match else ""
            period_match = re.search(r'(\d{4}\.\d{2}\s*[–\-—]\s*(?:至今|\d{4}\.\d{2})|\d{4}\s*[–\-—]\s*(?:至今|\d{4}))', pb)
            period = period_match.group(1) if period_match else ""
            bullets = re.findall(r'[•·\-\*]\s*(.{10,})', pb)
            desc = [b.strip() for b in bullets if b.strip()]
            if proj_name or desc:
                projects.append({"name": proj_name, "role": role, "period": period, "description": desc})

    # Leadership
    leadership = []
    lead_section = re.search(r'(组织经历|Leadership|社团)[：:\s]*\n([\s\S]*?)(?=\n荣誉|Award|\n技能|Skill)', full_text, re.IGNORECASE)
    if lead_section:
        block = lead_section.group(2)
        org_blocks = re.split(r'\n(?=\S)', block)
        for ob in org_blocks:
            if not ob.strip():
                continue
            org_match = re.match(r'\s*(.+?)(?:\s*[|｜]\s*|\s{2,})', ob)
            org = org_match.group(1).strip() if org_match else ""
            role_match = re.search(r'[|｜]\s*(.+?)(?:\s{2,}|\n)', ob)
            role = role_match.group(1).strip() if role_match else ""
            period_match = re.search(r'(\d{4}\.\d{2}\s*[–\-—]\s*\d{4}\.\d{2}|\d{4}年\d{2}月\s*[–\-—]\s*\d{4}年\d{2}月)', ob)
            period = period_match.group(1) if period_match else ""
            bullets = re.findall(r'[•·\-\*]\s*(.{10,})', ob)
            desc = [b.strip() for b in bullets if b.strip()]
            if org or desc:
                leadership.append({"organization": org, "role": role, "period": period, "description": desc})

    # Awards
    awards = []
    award_section = re.search(r'(荣誉|奖项|Award)[：:\s]*\n([\s\S]*?)(?=\n技能|Skill|\n语言|Language|\Z)', full_text, re.IGNORECASE)
    if award_section:
        block = award_section.group(2)
        awards = [a.strip() for a in re.findall(r'[•·\-\*]\s*(.{5,})', block) if a.strip()]

    # Languages
    languages = []
    lang_match = re.search(r'CET-6\s*(\d+\+?)', full_text)
    if lang_match:
        languages.append(f"英语 CET-6 {lang_match.group(1)}")
    lang_match2 = re.search(r'CET-4\s*(\d+\+?)', full_text)
    if lang_match2:
        languages.append(f"英语 CET-4 {lang_match2.group(1)}")

    # Interests
    interests = []
    int_match = re.search(r'兴趣[：:]\s*(.+)', full_text)
    if int_match:
        interests = [i.strip() for i in re.split(r'[、,，]', int_match.group(1)) if i.strip()]

    # Title
    title = ""
    title_match = re.search(r'(AI[^\n]{5,50}(?:实习生|工程师|开发))', full_text)
    if title_match:
        title = title_match.group(1).strip()

    return {
        "personal": {
            "name": name,
            "nameEn": name_en,
            "title": title,
            "photo": "",
            "phone": phone,
            "email": email,
            "location": location,
            "github": github,
        },
        "summary": summary,
        "education": education,
        "coreStrengths": core_strengths,
        "skills": skills,
        "projects": projects,
        "leadership": leadership,
        "awards": awards,
        "languages": languages,
        "interests": interests,
    }


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No PDF path provided"}))
        sys.exit(1)
    result = parse_resume(sys.argv[1])
    print(json.dumps(result, ensure_ascii=False, indent=2))
