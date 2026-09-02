import { AcademyHeader } from "@/components/academy/academy-header";
import { AcademySidebar } from "@/components/academy/academy-sidebar";
import { SidebarProvider } from "@/components/academy/sidebar-context";

type StaticPageLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function StaticPageLayout({ title, description, children }: StaticPageLayoutProps) {
  return (
    <SidebarProvider>
      <div className="group/sidebar-wrapper flex min-h-svh w-full bg-sidebar">
        <AcademySidebar />
        <main className="relative flex w-full flex-1 flex-col bg-background md:m-2 md:ml-0 md:rounded-xl md:shadow-sm">
          <AcademyHeader />
          <div className="flex flex-1 flex-col">
            <div className="p-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="mb-4">
                  <h1 className="font-display text-2xl font-bold tracking-tight">{title}</h1>
                  {description && (
                    <p className="text-muted-foreground mt-1 text-sm">{description}</p>
                  )}
                </div>
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}