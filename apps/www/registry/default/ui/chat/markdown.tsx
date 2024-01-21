import { FC, memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import { CodeBlock } from "./codeblock"

const MemoizedReactMarkdown: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)

export default function Markdown({ content }: { content: string }) {
  return (
    <MemoizedReactMarkdown
      className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words"
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        p({ children }) {
          return <p className="mb-2 last:mb-0">{children}</p>
        },
        code({ node, className, children, ...props }) {
          if (Array.isArray(children) && children.length) {
            if (children[0] == "▍") {
              return (
                <span className="mt-1 animate-pulse cursor-default">▍</span>
              )
            }

            children[0] = (children[0] as string).replace("`▍`", "▍")
          }

          return (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        pre({ node, className, ...props }) {
          const match = /language-(\w+)/.exec(className || "")

          return (
            <CodeBlock
              key={Math.random()}
              language={(match && match[1]) || ""}
              value={String(props.children).replace(/\n$/, "")}
              {...props}
            />
          )
        },
      }}
    >
      {content}
    </MemoizedReactMarkdown>
  )
}
