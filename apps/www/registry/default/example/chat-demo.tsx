import { ChatInput, ChatMessages } from "@/registry/default/ui/chat"

const emptyProps = {} as any
const sampleMessages = [
  {
    id: "1",
    content: "Write simple JavaScript code",
    role: "user",
  },
  {
    id: "2",
    content:
      'Sure! Here\'s a simple JavaScript code that prompts the user to enter their name and then displays a welcome message:\n\n```javascript\n// Prompt the user to enter their name\nvar name = prompt("Please enter your name:");\n\n// Display a welcome message\nconsole.log("Welcome, " + name + "!");\n```\n\nIn this code, the `prompt()` function is used to display a dialog box that asks the user to enter their name. The entered name is then stored in a variable called `name`.\n\nThe `console.log()` function is used to display a welcome message in the browser\'s console, which includes the entered name.',
    role: "assistant",
  },
]

export default function ChatDemo() {
  return (
    <div className="mx-auto max-w-5xl space-y-4 p-4">
      <ChatMessages messages={sampleMessages} {...emptyProps} />
      <ChatInput {...emptyProps} />
    </div>
  )
}
