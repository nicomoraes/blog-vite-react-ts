import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Container } from './styles';

type Props = {
  markdown?: string;
};

type CodeBlockProps = {
  node: React.ReactNode;
  inline: never;
  className?: string;
  children?: React.ReactNode;
};

export const PostBody: React.FC<Props> = ({ markdown }) => {
  const CodeBlock = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    code({ node, inline, className, children, ...props }: CodeBlockProps) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag='div'
          {...props}
          customStyle={{ fontFamily: 'sans-serif' }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <Container>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>
        {markdown ? markdown : ''}
      </ReactMarkdown>
    </Container>
  );
};
