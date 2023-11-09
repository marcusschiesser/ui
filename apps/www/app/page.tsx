import { ExamplesNav } from "@/components/examples-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import ChatPage from "@/app/examples/chat/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>UI for your LLM application</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          LLM apps. Open Source and based on shadcn/ui.
        </PageHeaderDescription>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <ChatPage />
        </div>
      </section>
    </div>
  )
}
