# CodeReview AI 🤖

An intelligent code review assistant powered by Claude AI that analyzes your code and provides instant feedback on security, performance, best practices, and architecture.

![TreeHacks 2026](https://img.shields.io/badge/TreeHacks-2026-blue)

## Features

- **Security Analysis**: Identifies SQL injection, XSS, authentication flaws, and other vulnerabilities
- **Performance Review**: Detects inefficient algorithms, memory leaks, and optimization opportunities
- **Best Practices**: Checks adherence to language-specific conventions and design patterns
- **Code Quality**: Assesses readability, maintainability, and documentation
- **Architecture Review**: Evaluates structure, modularity, and scalability
- **Multi-language Support**: TypeScript, JavaScript, Python, Go, Rust, Java, C++, Ruby

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI**: shadcn/ui, Tailwind CSS
- **AI**: Claude 3.5 Sonnet (via Anthropic AI SDK)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:
   ```bash
   echo "ANTHROPIC_API_KEY=your_key_here" > .env.local
   ```
4. Run the development server:
   ```bash
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## How It Works

1. Paste your code into the editor
2. Select the programming language
3. Click "Review Code"
4. Get instant, comprehensive feedback

## Use Cases

- **Developers**: Get quick feedback before committing code
- **Students**: Learn best practices and improve code quality
- **Teams**: Establish consistent review standards
- **Code Review**: Pre-screen before human review

## Built for TreeHacks 2026

Created to solve the problem of slow, inconsistent code reviews by providing instant, AI-powered analysis that helps developers ship better code faster.
