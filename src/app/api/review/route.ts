import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { code, language } = await req.json();

  const result = streamText({
    model: anthropic('claude-3-5-sonnet-20241022'),
    system: `You are an expert code reviewer. Analyze the provided code and provide a comprehensive review covering:

1. **Security Vulnerabilities**: Identify potential security issues (SQL injection, XSS, authentication flaws, etc.)
2. **Performance Issues**: Point out inefficient algorithms, memory leaks, or optimization opportunities
3. **Best Practices**: Check adherence to language-specific conventions and design patterns
4. **Code Quality**: Assess readability, maintainability, and documentation
5. **Architecture**: Evaluate structure, modularity, and scalability
6. **Testing**: Suggest test coverage improvements

Format your response with clear sections using markdown. Be constructive and provide specific, actionable recommendations with code examples where helpful.`,
    messages: [
      {
        role: 'user',
        content: `Please review this ${language || 'code'}:\n\n\`\`\`${language || 'text'}\n${code}\n\`\`\``,
      },
    ],
  });

  return result.toTextStreamResponse();
}
