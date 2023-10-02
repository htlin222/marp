---
title: "How to Use Marp"
date: "2023-09-25"
marp: true
author: Hsieh-Ting Lin
paginate: true
---
# marp

a template from [marp-team/marp-cli: A CLI interface for Marp and Marpit based converters](https://github.com/marp-team/marp-cli)

---

## How to install

```bash
npm install markdown-it-admon markdown-it-container markdown-it-task-lists @marp-team/marp-cli
```

---

## Build

```bash
marp --theme theme.css "YOUR_MARKDOWN_FILE.md" --engine engine.js --bespoke.progress --html
```
